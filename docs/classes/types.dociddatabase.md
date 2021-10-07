[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / DocIdDatabase

# Class: DocIdDatabase

[types](../modules/types.md).DocIdDatabase

## Hierarchy

- **DocIdDatabase**

  ↳ [*MemoryDocIdDatabase*](docids.memorydociddatabase.md)

  ↳ [*LevelDocIdDatabase*](docids.leveldociddatabase.md)

## Table of contents

### Constructors

- [constructor](types.dociddatabase.md#constructor)

### Methods

- [add](types.dociddatabase.md#add)
- [close](types.dociddatabase.md#close)
- [get](types.dociddatabase.md#get)
- [remove](types.dociddatabase.md#remove)
- [resolve](types.dociddatabase.md#resolve)

## Constructors

### constructor

\+ **new DocIdDatabase**(): [*DocIdDatabase*](types.dociddatabase.md)

**Returns:** [*DocIdDatabase*](types.dociddatabase.md)

## Methods

### add

▸ `Abstract` **add**(`key`: *string*, `value`: [*DocStats*](../interfaces/types.docstats.md)): *Promise*<bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `value` | [*DocStats*](../interfaces/types.docstats.md) |

**Returns:** *Promise*<bigint\>

Defined in: [src/types.ts:38](https://github.com/wholebuzz/search/blob/master/src/types.ts#L38)

___

### close

▸ `Abstract` **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:45](https://github.com/wholebuzz/search/blob/master/src/types.ts#L45)

___

### get

▸ `Abstract` **get**(`docId`: *bigint*): *Promise*<undefined \| [*DocStats*](../interfaces/types.docstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | *bigint* |

**Returns:** *Promise*<undefined \| [*DocStats*](../interfaces/types.docstats.md)\>

Defined in: [src/types.ts:37](https://github.com/wholebuzz/search/blob/master/src/types.ts#L37)

___

### remove

▸ `Abstract` **remove**(`key`: *string*): *Promise*<``null`` \| bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Promise*<``null`` \| bigint\>

Defined in: [src/types.ts:39](https://github.com/wholebuzz/search/blob/master/src/types.ts#L39)

___

### resolve

▸ `Abstract` **resolve**<I, O\>(`query`: I[], `getter`: (`x`: I) => *bigint*, `putter`: (`x`: I, `y`: [*DocStats*](../interfaces/types.docstats.md)) => O): *Promise*<O[]\>

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

Defined in: [src/types.ts:40](https://github.com/wholebuzz/search/blob/master/src/types.ts#L40)
