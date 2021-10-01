import { FileSystem } from '@wholebuzz/fs/lib/fs'
import base62 from 'base62'
import MinHeap from 'mnemonist/heap'
import * as path from 'path'
import { RecordReader } from 'tfrecord-stream/lib/record_reader'
import { RecordWriter } from 'tfrecord-stream/lib/record_writer'
import {
  addPostingEntryScores,
  Document,
  DocumentMap,
  HasDocId,
  IDFMap,
  IdValue,
  LevelDocumentMap,
  PostingEntry,
  PostingList,
  PostingListDatabase,
  readIDFMap,
  searchConfig,
  tokenizeForSearch,
  writeIDFMap,
} from './search'

export const fnv1a = require('@sindresorhus/fnv1a')
export const intersect = require('binary-merge/intersect')
export const mapObject = require('map-obj')
export const sorted = require('sorted-array-functions')

interface HeapItem {
  term: string
  offset: number
  entry: PostingEntry
  block: PostingEntry[]
  reader?: RecordReader | null
}

export class MemoryPostingListDatabase implements PostingListDatabase {
  db: Record<string, PostingList> = {}
  docmap?: DocumentMap
  lexicon: IDFMap
  prepTasks = tokenizeForSearch
  sections: string[] = []
  sectionWeights: number[] = []
  termId = 0

  constructor(config = searchConfig) {
    this.lexicon = {
      config: { ...config },
      idf: this.db,
      minIDF: 0,
      avgCorpusLength: 0,
      totalCorpusLength: 0,
      totalDocs: 0,
    }
    this.defineConfig(this.lexicon.config)
  }

  async init() {
    /* for override */
  }

  async shutdown() {
    await this.docmap?.close()
  }

  defineConfig(config: Record<string, any>): boolean {
    this.lexicon.config = config
    this.sections = Object.keys(this.lexicon.config.fldWeights)
    this.sectionWeights = Object.values(this.lexicon.config.fldWeights)
    return true
  }

  // tslint:disable-next-line
  definePrepTasks(tasks: Function[], _field?: string): number {
    this.prepTasks = tasks
    return this.prepTasks.length
  }

  async consolidate(_precision?: number): Promise<boolean> {
    this.lexicon.minIDF = Number.MAX_SAFE_INTEGER
    this.lexicon.avgCorpusLength = this.lexicon.totalCorpusLength / this.lexicon.totalDocs
    for (const [_term, entry] of Object.entries(this.db)) {
      await this.consolidateIndex(entry)
    }
    return true
  }

  async consolidateIndex(index: PostingList) {
    // console.log('consolidateIndex', index.term)
    const { k } = this.lexicon.config.bm25Params
    const n = index.data.length + (index.fileEntries ?? 0)
    const v = (index.value = Math.log((this.lexicon.totalDocs - n + 0.5) / (n + 0.5) + k))
    if (v < this.lexicon.minIDF) this.lexicon.minIDF = v
    for (const entry of index.data) this.scoreEntry(entry, index.value)
  }

  scoreEntry(entry: PostingEntry, idf: number) {
    const { b, k1 } = this.lexicon.config.bm25Params
    const freq = this.getFreq(entry.occurrences, entry.sections)
    const normalizationFactor = 1 - b + b * (entry.doclen / this.lexicon.avgCorpusLength)
    entry.score = Math.abs((freq * (k1 + 1)) / (k1 * normalizationFactor + freq)) * idf
    if (this.lexicon.config.freqPrecision) {
      entry.score =
        Math.sign(freq) * parseFloat(entry.score.toFixed(this.lexicon.config.freqPrecision))
    }
  }

  onNewPostingListData(_pl: PostingList) {
    /* for override */
  }

  async docName(id: string | bigint): Promise<string> {
    return (
      (this.docmap && typeof id === 'bigint' && (await this.docmap.get(id))?.guid) || id.toString()
    )
  }

  parseDoc(
    doc: Record<string, string>,
    sections: number[],
    uniqueTokens: Record<string, number[]>
  ) {
    let doclen = 0
    let sectionlen = 0
    this.sections.forEach((section, sectionIndex) => {
      let tokens: any = doc[section]
      if (!tokens) {
        sections.push(sectionlen)
        return
      }
      this.prepTasks.forEach((tf) => (tokens = tf(tokens)))
      tokens.forEach((t: string, i: number) =>
        (uniqueTokens[t] ?? (uniqueTokens[t] = [])).push(doclen + i)
      )
      doclen += tokens.length * this.sectionWeights[sectionIndex]
      sectionlen += tokens.length
      sections.push(sectionlen)
    })
    return doclen
  }

  async addDoc(doc: Record<string, string>, id: string | bigint, _version?: Date): Promise<number> {
    try {
      const sections: number[] = []
      const uniqueTokens: Record<string, number[]> = {}
      const doclen = this.parseDoc(doc, sections, uniqueTokens)
      this.lexicon.totalDocs++
      this.lexicon.totalCorpusLength += doclen
      this.lexicon.avgCorpusLength = this.lexicon.totalCorpusLength / this.lexicon.totalDocs
      for (const term of Object.keys(uniqueTokens)) {
        const pl =
          this.db[term] ??
          (this.db[term] = { data: [], id: this.termId++, term, value: this.lexicon.minIDF })
        const emptyPl = pl.data.length === 0
        const entry = { docid: id, doclen, occurrences: uniqueTokens[term], score: 0, sections }
        if (this.lexicon.avgCorpusLength) this.scoreEntry(entry, pl.value)
        sorted.add(pl.data, entry, compareDocId)
        if (emptyPl) this.onNewPostingListData(pl)
      }
    } catch (err) {
      console.log('addDoc', await this.docName(id), err.message)
    }
    return this.lexicon.totalDocs
  }

  async removeDoc(doc: Record<string, string>, id: string | bigint): Promise<number> {
    try {
      const sections: number[] = []
      const uniqueTokens: Record<string, number[]> = {}
      const doclen = this.parseDoc(doc, sections, uniqueTokens)
      Object.keys(uniqueTokens).forEach((term: string) => {
        const pl = this.db[term]
        if (pl) sorted.remove(pl.data, { docid: id }, compareDocId)
      })
      this.lexicon.totalDocs--
      this.lexicon.totalCorpusLength -= doclen
      this.lexicon.avgCorpusLength = this.lexicon.totalCorpusLength / this.lexicon.totalDocs
    } catch (err) {
      console.log('removeDoc', await this.docName(id), err.message)
    }
    return this.lexicon.totalDocs
  }

  getFreq(occurrences: ArrayLike<number>, sections: ArrayLike<number>) {
    let freq = 0
    let currentSection = 0
    // tslint:disable-next-line
    for (let i = 0; i < occurrences.length; i++) {
      const occurrence = occurrences[i]
      while (occurrence >= sections[currentSection] && currentSection < sections.length) {
        currentSection++
      }
      freq += this.sectionWeights[currentSection]
    }
    return freq
  }

  getDocs(): Record<string, Document> {
    return {}
  }

  getTokens(): Record<string, number> {
    return mapObject(this.lexicon.idf, (k: string, v: IdValue) => [k, v.id])
  }

  getIDF(): number[] {
    const ret = (new Array(this.lexicon.idf.length) as any[]) as number[]
    Object.values(this.lexicon.idf).forEach((v) => (ret[v.id] = v.value))
    return ret
  }

  getConfig(): Record<string, any> {
    return this.lexicon.config
  }

  getTotalCorpusLength(): number {
    return this.lexicon.totalCorpusLength
  }

  getTotalDocs(): number {
    return this.lexicon.totalDocs
  }

  async intersect(plA: PostingList, plB?: PostingList): Promise<PostingEntry[]> {
    return plB ? this.intersectNext(plA.data, plB) : plA.data
  }

  async intersectNext(
    dataA: PostingEntry[],
    plB: PostingList,
    modify = false
  ): Promise<PostingEntry[]> {
    return intersect(dataA, plB.data, compareDocId, (x: PostingEntry, y: PostingEntry) =>
      addPostingEntryScores(x, y, modify)
    )
  }
}

export class FilePostingListDatabase extends MemoryPostingListDatabase {
  flushTrain: PostingList[] = []
  flushing: PostingList | null = null
  shutdownWaiting: Array<() => void> = []
  blockSize = 100
  inAddDoc = 0

  constructor(
    public fs: FileSystem,
    public directory: string,
    public directoryPrefix = 2,
    config = searchConfig,
    public docmap: DocumentMap = new LevelDocumentMap(directory + '/docmap.level')
  ) {
    super(config)
  }

  async init() {
    try {
      const lexicon = await readIDFMap(this.fs, this.directory + '/lexicon.json.gz')
      if (lexicon) {
        this.lexicon = lexicon
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
    await writeIDFMap(this.fs, this.directory + '/lexicon.json.gz', this.lexicon)
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
      if (this.docmap) id = await this.docmap.add(id.toString(), { guid: id.toString() })
      return super.addDoc(doc, id)
    } catch (err) {
      throw err
    } finally {
      this.inAddDoc--
    }
  }

  async removeDoc(doc: Record<string, string>, id: string | bigint): Promise<number> {
    if (this.docmap) {
      const docId = await this.docmap.remove(id.toString())
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
      ? new PostingEntryBlock(Buffer.from(currentRecord), index.term)
      : null
    const heapData: HeapItem[] = []
    addHeapItemList(heapData, index.term, { data: indexData })
    addHeapItemList(heapData, index.term, currentBlock, currentReader)
    const heap = MinHeap.from(heapData, compareHeapItem)

    const outUrl = url + (newIndex ? '' : '.new')
    if (this.directoryPrefix) await this.fs.ensureDirectory(path.dirname(outUrl))
    const out = await createBinaryRecordWriter(this.fs, outUrl)
    let newBlock: PostingEntry[] = []
    let numNewEntries = 0
    while (true) {
      const item = heap.peek()
      if (item && (!this.docmap || (await this.docmap.get(item.entry.docid as bigint)))) {
        const entry = item.reader
          ? {
              docid: item.entry.docid,
              doclen: item.entry.doclen,
              occurrences: item.entry.occurrences,
              score: item.entry.score,
              sections: item.entry.sections,
            }
          : item.entry
        if (item.reader) this.scoreEntry(entry, index.value)
        newBlock.push(entry)
        numNewEntries++
      }
      if (newBlock.length >= this.blockSize || (!item && newBlock.length > 0)) {
        const newEntries = PostingEntryBlock.createFrom(newBlock, index.term).buffer
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
    index.fileInode = (await this.fs.getFileStatus(url, false)).inode
    index.fileEntries = numNewEntries
  }

  async intersect(plA: PostingList, plB?: PostingList): Promise<PostingEntry[]> {
    const [inA, inB] = await Promise.all([
      plA.fileEntries ? createBinaryRecordReader(this.fs, this.getUrl(plA.term)) : null,
      plB?.fileEntries ? createBinaryRecordReader(this.fs, this.getUrl(plB.term)) : null,
    ])
    const [blockA, blockB] = (
      await Promise.all([inA?.readRecord(), inB?.readRecord()])
    ).map((x, i) =>
      x ? new PostingEntryBlock(Buffer.from(x), i === 0 ? plA.term : plB!.term) : null
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

  async intersectNext(
    dataA: PostingEntry[],
    plB: PostingList,
    _modify = false
  ): Promise<PostingEntry[]> {
    const inB = plB?.fileEntries
      ? await createBinaryRecordReader(this.fs, this.getUrl(plB.term))
      : null
    const recordB = inB ? await inB?.readRecord() : null
    const blockB = recordB ? new PostingEntryBlock(Buffer.from(recordB), plB.term) : null

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

export class PostingEntryBlock {
  static headerLength = 2

  static createFrom(input: PostingEntry[], term: string) {
    const docIdSize = input.length * BigInt64Array.BYTES_PER_ELEMENT
    const docLenSize = input.length * Float32Array.BYTES_PER_ELEMENT
    const docScoreSize = input.length * Float32Array.BYTES_PER_ELEMENT
    const docOccurrencesSize = input.length * Int32Array.BYTES_PER_ELEMENT
    let sections = 0
    let sectionsLength = 0
    let occurrencesLength = 0
    input.forEach((entry) => {
      if (!sections) sections = entry.sections.length
      if (entry.sections.length !== sections) throw new Error('Expected fixed number of sections')
      sectionsLength += entry.sections.length
      occurrencesLength += entry.occurrences.length
    })
    const buffer = new ArrayBuffer(
      PostingEntryBlock.headerLength * Int32Array.BYTES_PER_ELEMENT +
        docIdSize +
        docLenSize +
        docScoreSize +
        docOccurrencesSize +
        sectionsLength * Int32Array.BYTES_PER_ELEMENT +
        occurrencesLength * Int32Array.BYTES_PER_ELEMENT
    )
    const header = new Int32Array(buffer, 0, PostingEntryBlock.headerLength)
    header[0] = input.length
    header[1] = sections
    // console.log('PostingEntryBlock.createFrom', term, header[0], header[1])
    const ret = new PostingEntryBlock(Buffer.from(buffer), term)
    if (ret.occurrences.length !== occurrencesLength) {
      throw new Error('PostingEntryBlock corrupt')
    }
    let occurrencesEnd = 0
    input.forEach((entry, i) => {
      ret.docIds[i] = entry.docid as bigint
      ret.docScores[i] = entry.score
      ret.docLengths[i] = entry.doclen
      for (let j = 0; j < sections; j++) ret.sections[i * sections + j] = entry.sections[j]
      for (let j = 0; j < entry.occurrences.length; j++) {
        ret.occurrences[occurrencesEnd + j] = entry.occurrences[j]
      }
      occurrencesEnd += entry.occurrences.length
      ret.docOccurrencesEnds[i] = occurrencesEnd
    })
    return ret
  }

  length: number
  sectionsLength: number
  docIds: BigInt64Array
  docScores: Float32Array
  docLengths: Float32Array
  docOccurrencesEnds: Int32Array
  sections: Int32Array
  occurrences: Int32Array
  data: PostingEntryView[]

  constructor(public buffer: Buffer, _term: string) {
    /* console.log(
      'PostingEntryBlock buffer',
      [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('')
    ) */
    let offset = buffer.byteOffset
    const header = new Int32Array(buffer.buffer, offset, PostingEntryBlock.headerLength)
    offset += PostingEntryBlock.headerLength * Int32Array.BYTES_PER_ELEMENT
    this.length = header[0]
    this.sectionsLength = header[1]
    // console.log('PostingEntryBlock', _term, header[0], header[1])
    this.docIds = new BigInt64Array(buffer.buffer, offset, this.length)
    offset += this.length * BigInt64Array.BYTES_PER_ELEMENT
    this.docScores = new Float32Array(buffer.buffer, offset, this.length)
    offset += this.length * Float32Array.BYTES_PER_ELEMENT
    this.docLengths = new Float32Array(buffer.buffer, offset, this.length)
    offset += this.length * Float32Array.BYTES_PER_ELEMENT
    this.docOccurrencesEnds = new Int32Array(buffer.buffer, offset, this.length)
    offset += this.length * Int32Array.BYTES_PER_ELEMENT
    this.sections = new Int32Array(buffer.buffer, offset, this.length * this.sectionsLength)
    offset += this.length * this.sectionsLength * Int32Array.BYTES_PER_ELEMENT
    this.occurrences = new Int32Array(
      buffer.buffer,
      offset,
      (buffer.byteLength + buffer.byteOffset - offset) / Int32Array.BYTES_PER_ELEMENT
    )
    this.data = Array.from({ length: this.length }, (_, i) => new PostingEntryView(this, i))
  }
}

export class PostingEntryView implements PostingEntry {
  constructor(public block: PostingEntryBlock, public index: number) {}

  get docid() {
    return this.block.docIds[this.index]
  }

  get score() {
    return this.block.docScores[this.index]
  }

  get doclen() {
    return this.block.docLengths[this.index]
  }

  get sections() {
    return new Int32Array(
      this.block.sections.buffer,
      this.block.sections.byteOffset +
        this.index * this.block.sectionsLength * Int32Array.BYTES_PER_ELEMENT,
      this.block.sectionsLength
    )
  }

  get occurrences() {
    const start = this.index === 0 ? 0 : this.block.docOccurrencesEnds[this.index - 1]
    const end = this.block.docOccurrencesEnds[this.index]
    return new Int32Array(
      this.block.occurrences.buffer,
      this.block.occurrences.byteOffset + start * Int32Array.BYTES_PER_ELEMENT,
      end - start
    )
  }
}

const compareDocId = (itemA: HasDocId, itemB: HasDocId) => genericCompare(itemA.docid, itemB.docid)

const comparePostingListInode = (plA: PostingList, plB: PostingList) => {
  const cmp = genericCompare(plA.fileInode, plB.fileInode)
  return cmp !== 0 ? cmp : genericCompare(plA.id, plB.id)
}

const compareHeapItem = (itemA: HeapItem, itemB: HeapItem) => compareDocId(itemA.entry, itemB.entry)

const incrementHeapItem = (heap: MinHeap<HeapItem>, item: HeapItem) => {
  item.offset++
  if (item.offset < item.block.length) {
    item.entry = item.block[item.offset]
    heap.replace(item)
  } else {
    if (item.reader) return false
    else heap.pop()
  }
  return true
}

const reloadHeapItem = (heap: MinHeap<HeapItem>, item: HeapItem, nextRecord: Uint8Array | null) => {
  if (nextRecord) {
    item.block = new PostingEntryBlock(Buffer.from(nextRecord), item.term).data
    item.entry = item.block[0]
    item.offset = 0
  } else {
    heap.pop()
  }
}

const addHeapItemList = (
  target: HeapItem[],
  term: string | undefined,
  pl: { data: PostingEntry[] } | undefined | null,
  reader?: RecordReader | null
) => {
  if (pl && pl.data && pl.data.length > 0) {
    target.push({ block: pl.data, entry: pl.data[0], offset: 0, reader, term: term! })
  }
}

const intersectHeaps = async (
  heapA: MinHeap<HeapItem>,
  heapB: MinHeap<HeapItem>,
  scoreF = addPostingEntryScores,
  modify = false
) => {
  const ret: PostingEntry[] = []
  while (true) {
    const itemA = heapA.peek()
    const itemB = heapB.peek()
    if (!itemA || !itemB) break

    const cmp = compareHeapItem(itemA, itemB)
    let incrA = cmp < 0
    let incrB = cmp > 0
    if (!incrA && !incrB) {
      incrA = incrB = true
      ret.push(scoreF(itemA.entry, itemB.entry, modify))
    }
    if (incrA) {
      if (!incrementHeapItem(heapA, itemA)) {
        reloadHeapItem(heapA, itemA, await itemA.reader!.readRecord())
      }
    }
    if (incrB) {
      if (!incrementHeapItem(heapB, itemB)) {
        reloadHeapItem(heapB, itemB, await itemB.reader!.readRecord())
      }
    }
  }
  return ret
}

const copyHeapData = async (heap: MinHeap<HeapItem>) => {
  const ret: PostingEntry[] = []
  while (true) {
    const item = heap.peek()
    if (!item) break
    ret.push({ docid: item.entry.docid, score: item.entry.score } as any)
    if (!incrementHeapItem(heap, item)) {
      reloadHeapItem(heap, item, await item.reader!.readRecord())
    }
  }
  return ret
}

export function arrayShiftRemove<X>(arr: X[], index: number): X {
  const ret = arr[index]
  for (; index < arr.length - 1; index++) arr[index] = arr[index + 1]
  arr.pop()
  return ret
}

export function genericCompare<X>(a: X, b: X) {
  return a < b ? -1 : b < a ? 1 : 0
}

/**
 * Creates a .tfrecord file reader using arbitrary buffers instead of protobuf.
 * @param url The URL of the file.tfbinary to read records from.
 */
export async function createBinaryRecordReader(fileSystem: FileSystem, url: string) {
  return RecordReader.createFromStream((await fileSystem.openReadableFile(url)).finish())
}

/**
 * Creates a .tfrecord file writer using arbitrary buffers instead of protobuf.
 * @param url The URL of the file.tfbinary to read records from.
 */
export async function createBinaryRecordWriter(fileSystem: FileSystem, url: string) {
  return RecordWriter.createFromStream((await fileSystem.openWritableFile(url)).finish())
}
