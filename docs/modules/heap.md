[@wholebuzz/search](../README.md) / [Exports](../modules.md) / heap

# Module: heap

## Table of contents

### Classes

- [MinHeap](../classes/heap.minheap.md)

### Interfaces

- [HeapItem](../interfaces/heap.heapitem.md)

### Functions

- [addHeapItemList](heap.md#addheapitemlist)
- [compareDocId](heap.md#comparedocid)
- [compareHeapItem](heap.md#compareheapitem)
- [copyHeapData](heap.md#copyheapdata)
- [genericCompare](heap.md#genericcompare)
- [incrementHeapItem](heap.md#incrementheapitem)
- [intersectHeaps](heap.md#intersectheaps)
- [reloadHeapItem](heap.md#reloadheapitem)

## Functions

### addHeapItemList

▸ `Const` **addHeapItemList**(`target`: [*HeapItem*](../interfaces/heap.heapitem.md)[], `term`: *undefined* \| *string*, `pl`: *undefined* \| ``null`` \| { `data`: [*PostingEntry*](../interfaces/types.postingentry.md)[]  }, `reader?`: ``null`` \| [*RecordReader*](../classes/record.recordreader.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [*HeapItem*](../interfaces/heap.heapitem.md)[] |
| `term` | *undefined* \| *string* |
| `pl` | *undefined* \| ``null`` \| { `data`: [*PostingEntry*](../interfaces/types.postingentry.md)[]  } |
| `reader?` | ``null`` \| [*RecordReader*](../classes/record.recordreader.md) |

**Returns:** *void*

Defined in: [src/heap.ts:44](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L44)

___

### compareDocId

▸ `Const` **compareDocId**(`itemA`: [*HasDocId*](../interfaces/types.hasdocid.md), `itemB`: [*HasDocId*](../interfaces/types.hasdocid.md)): ``0`` \| ``1`` \| ``-1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemA` | [*HasDocId*](../interfaces/types.hasdocid.md) |
| `itemB` | [*HasDocId*](../interfaces/types.hasdocid.md) |

**Returns:** ``0`` \| ``1`` \| ``-1``

Defined in: [src/heap.ts:101](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L101)

___

### compareHeapItem

▸ `Const` **compareHeapItem**(`itemA`: [*HeapItem*](../interfaces/heap.heapitem.md), `itemB`: [*HeapItem*](../interfaces/heap.heapitem.md)): ``0`` \| ``1`` \| ``-1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemA` | [*HeapItem*](../interfaces/heap.heapitem.md) |
| `itemB` | [*HeapItem*](../interfaces/heap.heapitem.md) |

**Returns:** ``0`` \| ``1`` \| ``-1``

Defined in: [src/heap.ts:15](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L15)

___

### copyHeapData

▸ `Const` **copyHeapData**(`heap`: [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\>): *Promise*<[*PostingEntry*](../interfaces/types.postingentry.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\> |

**Returns:** *Promise*<[*PostingEntry*](../interfaces/types.postingentry.md)[]\>

Defined in: [src/heap.ts:88](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L88)

___

### genericCompare

▸ **genericCompare**<X\>(`a`: X, `b`: X): ``0`` \| ``1`` \| ``-1``

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | X |
| `b` | X |

**Returns:** ``0`` \| ``1`` \| ``-1``

Defined in: [src/heap.ts:104](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L104)

___

### incrementHeapItem

▸ `Const` **incrementHeapItem**(`heap`: [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\>, `item`: [*HeapItem*](../interfaces/heap.heapitem.md)): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\> |
| `item` | [*HeapItem*](../interfaces/heap.heapitem.md) |

**Returns:** *boolean*

Defined in: [src/heap.ts:18](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L18)

___

### intersectHeaps

▸ `Const` **intersectHeaps**(`heapA`: [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\>, `heapB`: [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\>, `scoreF`: (`entryA`: [*PostingEntry*](../interfaces/types.postingentry.md), `entryB`: [*PostingEntry*](../interfaces/types.postingentry.md), `modify`: *boolean*) => [*PostingEntry*](../interfaces/types.postingentry.md), `modify?`: *boolean*): *Promise*<[*PostingEntry*](../interfaces/types.postingentry.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `heapA` | [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\> | - |
| `heapB` | [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\> | - |
| `scoreF` | (`entryA`: [*PostingEntry*](../interfaces/types.postingentry.md), `entryB`: [*PostingEntry*](../interfaces/types.postingentry.md), `modify`: *boolean*) => [*PostingEntry*](../interfaces/types.postingentry.md) | - |
| `modify` | *boolean* | false |

**Returns:** *Promise*<[*PostingEntry*](../interfaces/types.postingentry.md)[]\>

Defined in: [src/heap.ts:55](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L55)

___

### reloadHeapItem

▸ `Const` **reloadHeapItem**(`heap`: [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\>, `item`: [*HeapItem*](../interfaces/heap.heapitem.md), `nextRecord`: ``null`` \| *Uint8Array*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | [*MinHeap*](../classes/heap.minheap.md)<[*HeapItem*](../interfaces/heap.heapitem.md)\> |
| `item` | [*HeapItem*](../interfaces/heap.heapitem.md) |
| `nextRecord` | ``null`` \| *Uint8Array* |

**Returns:** *void*

Defined in: [src/heap.ts:30](https://github.com/wholebuzz/search/blob/master/src/heap.ts#L30)
