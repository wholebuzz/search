import { FileSystem } from '@wholebuzz/fs/lib/fs'
import base62 from 'base62'
import * as path from 'path'
import { LevelDocIdDatabase } from './docids'
import {
  addHeapItemList,
  compareHeapItem,
  copyHeapData,
  genericCompare,
  HeapItem,
  incrementHeapItem,
  intersectHeaps,
  MinHeap,
  reloadHeapItem,
} from './heap'
import { readLexicon, writeLexicon } from './lexicon'
import { MemoryPostingListDatabase, sorted } from './posting'
import { createBinaryRecordReader, createBinaryRecordWriter, PostingBlock } from './record'
import { fnv1a } from './tokens'
import { DocIdDatabase, Posting, PostingList } from './types'

export class FilePostingListDatabase extends MemoryPostingListDatabase {
  flushTrain: PostingList[] = []
  flushing: PostingList | null = null
  shutdownWaiting: Array<() => void> = []
  blockSize = 100
  inAddDoc = 0

  constructor(
    public fs: FileSystem,
    public directory: string,
    public directoryPrefix: number,
    public config: Record<string, any>,
    public docids: DocIdDatabase = new LevelDocIdDatabase(directory + '/docids.level')
  ) {
    super(config)
  }

  async init() {
    try {
      const lexicon = await readLexicon(this.fs, this.directory + '/lexicon.json.gz')
      if (lexicon) {
        this.lexicon = lexicon
        this.lexicon.config = {
          ...this.config,
          ...this.lexicon.config,
        }
        this.db = lexicon.idf as any
      }
    } catch (_err) {
      /* do nothing */
    }
  }

  async shutdown() {
    if (this.inAddDoc || this.flushTrain.length) {
      return new Promise<void>((resolve) => this.shutdownWaiting.push(resolve))
    } else {
      await this.onShutdown()
    }
  }

  async onShutdown() {
    const shutdownWaiting = this.shutdownWaiting
    this.shutdownWaiting = []
    await super.shutdown()
    await writeLexicon(this.fs, this.directory + '/lexicon.json.gz', this.lexicon)
    for (const cb of shutdownWaiting) cb()
  }

  async addDoc(doc: Record<string, string>, id: string | bigint, version?: Date): Promise<number> {
    if (this.shutdownWaiting.length) return this.lexicon.totalDocs
    try {
      this.inAddDoc++
      if (version) {
        if (!this.lexicon.version || version > this.lexicon.version) this.lexicon.version = version
        else return this.lexicon.totalDocs
      }
      if (this.docids) id = await this.docids.add(id.toString(), { guid: id.toString() })
      return super.addDoc(doc, id)
    } catch (err) {
      throw err
    } finally {
      this.inAddDoc--
    }
  }

  async removeDoc(doc: Record<string, string>, id: string | bigint): Promise<number> {
    if (this.docids) {
      const docId = await this.docids.remove(id.toString())
      if (!docId) return this.lexicon.totalDocs
    }
    return super.removeDoc(doc, id)
  }

  onNewPostingListData(pl: PostingList) {
    if (this.flushing === pl) return
    const startFlushTrain = this.flushTrain.length === 0
    sorted.add(this.flushTrain, pl, comparePostingListInode)
    if (startFlushTrain) setTimeout(() => this.flushNext(pl), 0)
  }

  flushNext(pl: PostingList) {
    const originalFileInode = pl.fileInode
    this.consolidateIndex(pl)
      .then(() => {
        this.flushing = null
        const sameInode = pl.fileInode === originalFileInode
        const index = sorted.eq(
          this.flushTrain,
          sameInode ? pl : { ...pl, fileInode: originalFileInode },
          comparePostingListInode
        )
        if (index < 0) throw new Error('Posting list disappeared')
        const nextPl = this.flushTrain[(index + 1) % this.flushTrain.length]
        if (!sameInode || pl.data.length === 0) arrayShiftRemove(this.flushTrain, index)
        if (!sameInode && pl.data.length > 0) {
          sorted.add(this.flushTrain, pl, comparePostingListInode)
        }
        if (this.flushTrain.length === 0) {
          if (this.shutdownWaiting.length) {
            this.onShutdown().catch((err) => console.log('onShutdown', err.message))
          }
          return
        }
        setTimeout(() => this.flushNext(nextPl), 0)
      })
      .catch((err) => console.log('flushNext', pl.term, err.message))
  }

  getUrl(term: string) {
    const hash = base62.encode(fnv1a(term))
    return (
      `${this.directory}` +
      (this.directoryPrefix ? `/${hash.substring(0, this.directoryPrefix)}/` : '/') +
      hash +
      '.tfpl'
    )
  }

  async consolidate(_precision?: number): Promise<boolean> {
    return true
  }

  async consolidateIndex(index: PostingList) {
    this.flushing = index
    await super.consolidateIndex(index)
    const indexData = index.data
    index.data = []

    const url = this.getUrl(index.term)
    const newIndex = !index.fileEntries
    const currentReader = newIndex ? null : await createBinaryRecordReader(this.fs, url)
    const currentRecord = currentReader ? await currentReader.readRecord() : null
    const currentBlock = currentRecord
      ? new PostingBlock(Buffer.from(currentRecord), index.term)
      : null
    const heapData: HeapItem[] = []
    addHeapItemList(heapData, index.term, { data: indexData })
    addHeapItemList(heapData, index.term, currentBlock, currentReader)
    const heap = MinHeap.from(heapData, compareHeapItem)

    const outUrl = url + (newIndex ? '' : '.new')
    if (this.directoryPrefix) await this.fs.ensureDirectory(path.dirname(outUrl))
    const out = await createBinaryRecordWriter(this.fs, outUrl)
    let newBlock: Posting[] = []
    let numNewEntries = 0
    while (true) {
      const item = heap.peek()
      if (item && (!this.docids || (await this.docids.get(item.posting.docid as bigint)))) {
        const posting = item.reader
          ? {
              docid: item.posting.docid,
              doclen: item.posting.doclen,
              occurrences: item.posting.occurrences,
              score: item.posting.score,
              sections: item.posting.sections,
            }
          : item.posting
        if (item.reader) this.scorePosting(posting, index.value)
        newBlock.push(posting)
        numNewEntries++
      }
      if (newBlock.length >= this.blockSize || (!item && newBlock.length > 0)) {
        const newEntries = PostingBlock.createFrom(newBlock, index.term).buffer
        await out.writeRecord(Buffer.from(newEntries))
        newBlock = []
      }
      if (!item) break
      if (!incrementHeapItem(heap, item)) {
        reloadHeapItem(heap, item, await item.reader!.readRecord())
      }
    }
    await out.close()
    if (!newIndex) {
      await this.fs.copyFile(outUrl, url)
      await this.fs.removeFile(outUrl)
    }
    index.fileInode = (await this.fs.getFileStatus(url, { version: false })).inode
    index.fileEntries = numNewEntries
  }

  async intersect(plA: PostingList, plB?: PostingList): Promise<Posting[]> {
    const [inA, inB] = await Promise.all([
      plA.fileEntries ? createBinaryRecordReader(this.fs, this.getUrl(plA.term)) : null,
      plB?.fileEntries ? createBinaryRecordReader(this.fs, this.getUrl(plB.term)) : null,
    ])
    const [blockA, blockB] = (await Promise.all([inA?.readRecord(), inB?.readRecord()])).map(
      (x, i) => (x ? new PostingBlock(Buffer.from(x), i === 0 ? plA.term : plB!.term) : null)
    )

    const heapDataA: HeapItem[] = []
    addHeapItemList(heapDataA, plA.term, plA)
    addHeapItemList(heapDataA, plA.term, blockA, inA!)
    const heapA = MinHeap.from(heapDataA, compareHeapItem)
    if (!plB) return copyHeapData(heapA)

    const heapDataB: HeapItem[] = []
    addHeapItemList(heapDataB, plB.term, plB)
    addHeapItemList(heapDataB, plB.term, blockB, inB!)
    const heapB = MinHeap.from(heapDataB, compareHeapItem)

    const ret = await intersectHeaps(heapA, heapB, this.lexicon.config.scoreTermPair, false)
    inA?.close()
    inB?.close()
    return ret
  }

  async intersectNext(dataA: Posting[], plB: PostingList, _modify = false): Promise<Posting[]> {
    const inB = plB?.fileEntries
      ? await createBinaryRecordReader(this.fs, this.getUrl(plB.term))
      : null
    const recordB = inB ? await inB?.readRecord() : null
    const blockB = recordB ? new PostingBlock(Buffer.from(recordB), plB.term) : null

    const heapDataA: HeapItem[] = []
    const heapDataB: HeapItem[] = []
    addHeapItemList(heapDataA, '', { data: dataA })
    addHeapItemList(heapDataB, plB.term, plB)
    addHeapItemList(heapDataB, plB.term, blockB, inB!)

    const heapA = MinHeap.from(heapDataA, compareHeapItem)
    const heapB = MinHeap.from(heapDataB, compareHeapItem)
    const ret = await intersectHeaps(heapA, heapB, this.lexicon.config.scoreTermPair, true)
    inB?.close()
    return ret
  }
}

const comparePostingListInode = (plA: PostingList, plB: PostingList) => {
  const cmp = genericCompare(plA.fileInode, plB.fileInode)
  return cmp !== 0 ? cmp : genericCompare(plA.id, plB.id)
}

export function arrayShiftRemove<X>(arr: X[], index: number): X {
  const ret = arr[index]
  for (; index < arr.length - 1; index++) arr[index] = arr[index + 1]
  arr.pop()
  return ret
}
