import MinHeap from 'mnemonist/heap'
import { PostingBlock, RecordReader } from './record'
import { HasDocId, Posting } from './types'

export { MinHeap }

export interface HeapItem {
  term: string
  offset: number
  posting: Posting
  block: Posting[]
  reader?: RecordReader | null
}

export const compareHeapItem = (itemA: HeapItem, itemB: HeapItem) =>
  compareDocId(itemA.posting, itemB.posting)

export const incrementHeapItem = (heap: MinHeap<HeapItem>, item: HeapItem) => {
  item.offset++
  if (item.offset < item.block.length) {
    item.posting = item.block[item.offset]
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
    item.block = new PostingBlock(Buffer.from(nextRecord), item.term).data
    item.posting = item.block[0]
    item.offset = 0
  } else {
    heap.pop()
  }
}

export const addHeapItemList = (
  target: HeapItem[],
  term: string | undefined,
  pl: { data: Posting[] } | undefined | null,
  reader?: RecordReader | null
) => {
  if (pl && pl.data && pl.data.length > 0) {
    target.push({ block: pl.data, posting: pl.data[0], offset: 0, reader, term: term! })
  }
}

export const intersectHeaps = async (
  heapA: MinHeap<HeapItem>,
  heapB: MinHeap<HeapItem>,
  scoreF: (postingA: Posting, postingB: Posting, modify: boolean) => Posting,
  modify = false
) => {
  const ret: Posting[] = []
  while (true) {
    const itemA = heapA.peek()
    const itemB = heapB.peek()
    if (!itemA || !itemB) break

    const cmp = compareHeapItem(itemA, itemB)
    let incrA = cmp < 0
    let incrB = cmp > 0
    if (!incrA && !incrB) {
      incrA = incrB = true
      ret.push(scoreF(itemA.posting, itemB.posting, modify))
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
  const ret: Posting[] = []
  while (true) {
    const item = heap.peek()
    if (!item) break
    ret.push({ docid: item.posting.docid, score: item.posting.score } as any)
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
