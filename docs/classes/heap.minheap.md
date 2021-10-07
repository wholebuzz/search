[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [heap](../modules/heap.md) / MinHeap

# Class: MinHeap<T\>

[heap](../modules/heap.md).MinHeap

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](heap.minheap.md#constructor)

### Properties

- [size](heap.minheap.md#size)

### Methods

- [clear](heap.minheap.md#clear)
- [consume](heap.minheap.md#consume)
- [inspect](heap.minheap.md#inspect)
- [peek](heap.minheap.md#peek)
- [pop](heap.minheap.md#pop)
- [push](heap.minheap.md#push)
- [pushpop](heap.minheap.md#pushpop)
- [replace](heap.minheap.md#replace)
- [toArray](heap.minheap.md#toarray)
- [from](heap.minheap.md#from)

## Constructors

### constructor

\+ **new MinHeap**<T\>(`comparator?`: *HeapComparator*<T\>): [*MinHeap*](heap.minheap.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparator?` | *HeapComparator*<T\> |

**Returns:** [*MinHeap*](heap.minheap.md)<T\>

Defined in: node_modules/mnemonist/heap.d.ts:10

## Properties

### size

• **size**: *number*

Defined in: node_modules/mnemonist/heap.d.ts:10

## Methods

### clear

▸ **clear**(): *void*

**Returns:** *void*

Defined in: node_modules/mnemonist/heap.d.ts:16

___

### consume

▸ **consume**(): T[]

**Returns:** T[]

Defined in: node_modules/mnemonist/heap.d.ts:23

___

### inspect

▸ **inspect**(): *any*

**Returns:** *any*

Defined in: node_modules/mnemonist/heap.d.ts:24

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Defined in: node_modules/mnemonist/heap.d.ts:18

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Defined in: node_modules/mnemonist/heap.d.ts:19

___

### push

▸ **push**(`item`: T): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | T |

**Returns:** *number*

Defined in: node_modules/mnemonist/heap.d.ts:17

___

### pushpop

▸ **pushpop**(`item`: T): *undefined* \| T

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | T |

**Returns:** *undefined* \| T

Defined in: node_modules/mnemonist/heap.d.ts:21

___

### replace

▸ **replace**(`item`: T): *undefined* \| T

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | T |

**Returns:** *undefined* \| T

Defined in: node_modules/mnemonist/heap.d.ts:20

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Defined in: node_modules/mnemonist/heap.d.ts:22

___

### from

▸ `Static` **from**<I\>(`iterable`: *Iterable*<I\> \| { [key: string]: I;  }, `comparator?`: *HeapComparator*<I\>): [*MinHeap*](heap.minheap.md)<I\>

#### Type parameters

| Name |
| :------ |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | *Iterable*<I\> \| { [key: string]: I;  } |
| `comparator?` | *HeapComparator*<I\> |

**Returns:** [*MinHeap*](heap.minheap.md)<I\>

Defined in: node_modules/mnemonist/heap.d.ts:27
