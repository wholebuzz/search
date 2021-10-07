[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [docids](../modules/docids.md) / MemoryDocIdDatabase

# Class: MemoryDocIdDatabase

[docids](../modules/docids.md).MemoryDocIdDatabase

## Hierarchy

- [*DocIdDatabase*](types.dociddatabase.md)

  ↳ **MemoryDocIdDatabase**

## Table of contents

### Constructors

- [constructor](docids.memorydociddatabase.md#constructor)

### Properties

- [docmap](docids.memorydociddatabase.md#docmap)
- [idmap](docids.memorydociddatabase.md#idmap)
- [nextDocId](docids.memorydociddatabase.md#nextdocid)

### Methods

- [add](docids.memorydociddatabase.md#add)
- [close](docids.memorydociddatabase.md#close)
- [get](docids.memorydociddatabase.md#get)
- [remove](docids.memorydociddatabase.md#remove)
- [resolve](docids.memorydociddatabase.md#resolve)

## Constructors

### constructor

\+ **new MemoryDocIdDatabase**(): [*MemoryDocIdDatabase*](docids.memorydociddatabase.md)

**Returns:** [*MemoryDocIdDatabase*](docids.memorydociddatabase.md)

Inherited from: [DocIdDatabase](types.dociddatabase.md)

## Properties

### docmap

• **docmap**: *Map*<bigint, [*DocStats*](../interfaces/types.docstats.md)\>

Defined in: [src/docids.ts:7](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L7)

___

### idmap

• **idmap**: *Map*<string, bigint\>

Defined in: [src/docids.ts:8](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L8)

___

### nextDocId

• **nextDocId**: *bigint*

Defined in: [src/docids.ts:9](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L9)

## Methods

### add

▸ **add**(`key`: *string*, `value`: [*DocStats*](../interfaces/types.docstats.md)): *Promise*<bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `value` | [*DocStats*](../interfaces/types.docstats.md) |

**Returns:** *Promise*<bigint\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:19](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L19)

___

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:11](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L11)

___

### get

▸ **get**(`docId`: *bigint*): *Promise*<undefined \| [*DocStats*](../interfaces/types.docstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | *bigint* |

**Returns:** *Promise*<undefined \| [*DocStats*](../interfaces/types.docstats.md)\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:15](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L15)

___

### remove

▸ **remove**(`key`: *string*): *Promise*<``null`` \| bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Promise*<``null`` \| bigint\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:25](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L25)

___

### resolve

▸ **resolve**<I, O\>(`query`: I[], `getter`: (`x`: I) => *bigint*, `putter`: (`x`: I, `y`: [*DocStats*](../interfaces/types.docstats.md)) => O): *Promise*<O[]\>

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | I[] |
| `getter` | (`x`: I) => *bigint* |
| `putter` | (`x`: I, `y`: [*DocStats*](../interfaces/types.docstats.md)) => O |

**Returns:** *Promise*<O[]\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:37](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L37)
