import MinHeap from 'mnemonist/heap'
import { PostingEntryBlock, RecordReader } from './record'
import { HasDocId, PostingEntry } from './types'

export { MinHeap }

export interface HeapItem {
  term: string
  offset: number
  entry: PostingEntry
  block: PostingEntry[]
  reader?: RecordReader | null
}

export const compareHeapItem = (itemA: HeapItem, itemB: HeapItem) =>
  compareDocId(itemA.entry, itemB.entry)

export const incrementHeapItem = (heap: MinHeap<HeapItem>, item: HeapItem) => {
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

export const reloadHeapItem = (
  heap: MinHeap<HeapItem>,
  item: HeapItem,
  nextRecord: Uint8Array | null
) => {
  if (nextRecord) {
    item.block = new PostingEntryBlock(Buffer.from(nextRecord), item.term).data
    item.entry = item.block[0]
    item.offset = 0
  } else {
    heap.pop()
  }
}

export const addHeapItemList = (
  target: HeapItem[],
  term: string | undefined,
  pl: { data: PostingEntry[] } | undefined | null,
  reader?: RecordReader | null
) => {
  if (pl && pl.data && pl.data.length > 0) {
    target.push({ block: pl.data, entry: pl.data[0], offset: 0, reader, term: term! })
  }
}

export const intersectHeaps = async (
  heapA: MinHeap<HeapItem>,
  heapB: MinHeap<HeapItem>,
  scoreF: (entryA: PostingEntry, entryB: PostingEntry, modify: boolean) => PostingEntry,
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

export const copyHeapData = async (heap: MinHeap<HeapItem>) => {
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

export const compareDocId = (itemA: HasDocId, itemB: HasDocId) =>
  genericCompare(itemA.docid, itemB.docid)

export function genericCompare<X>(a: X, b: X) {
  return a < b ? -1 : b < a ? 1 : 0
}
