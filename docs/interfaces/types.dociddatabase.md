[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / DocIdDatabase

# Interface: DocIdDatabase

[types](../modules/types.md).DocIdDatabase

## Implemented by

- [*LevelDocIdDatabase*](../classes/docids.leveldociddatabase.md)
- [*MemoryDocIdDatabase*](../classes/docids.memorydociddatabase.md)

## Table of contents

### Methods

- [add](types.dociddatabase.md#add)
- [close](types.dociddatabase.md#close)
- [get](types.dociddatabase.md#get)
- [remove](types.dociddatabase.md#remove)
- [resolve](types.dociddatabase.md#resolve)

## Methods

### add

▸ **add**(`key`: *string*, `value`: [*DocStats*](types.docstats.md)): *Promise*<bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `value` | [*DocStats*](types.docstats.md) |

**Returns:** *Promise*<bigint\>

Defined in: [src/types.ts:59](https://github.com/wholebuzz/search/blob/master/src/types.ts#L59)

___

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:66](https://github.com/wholebuzz/search/blob/master/src/types.ts#L66)

___

### get

▸ **get**(`docId`: *bigint*): *Promise*<undefined \| [*DocStats*](types.docstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | *bigint* |

**Returns:** *Promise*<undefined \| [*DocStats*](types.docstats.md)\>

Defined in: [src/types.ts:58](https://github.com/wholebuzz/search/blob/master/src/types.ts#L58)

___

### remove

▸ **remove**(`key`: *string*): *Promise*<``null`` \| bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Promise*<``null`` \| bigint\>

Defined in: [src/types.ts:60](https://github.com/wholebuzz/search/blob/master/src/types.ts#L60)

___

### resolve

▸ **resolve**<I, O\>(`query`: I[], `getter`: (`x`: I) => *bigint*, `putter`: (`x`: I, `y`: [*DocStats*](types.docstats.md)) => O): *Promise*<O[]\>

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
| `putter` | (`x`: I, `y`: [*DocStats*](types.docstats.md)) => O |

**Returns:** *Promise*<O[]\>

Defined in: [src/types.ts:61](https://github.com/wholebuzz/search/blob/master/src/types.ts#L61)
