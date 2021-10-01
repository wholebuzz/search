[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [search](../modules/search.md) / DocumentMap

# Class: DocumentMap

[search](../modules/search.md).DocumentMap

## Hierarchy

- **DocumentMap**

  ↳ [*MemoryDocumentMap*](search.memorydocumentmap.md)

  ↳ [*LevelDocumentMap*](search.leveldocumentmap.md)

## Table of contents

### Constructors

- [constructor](search.documentmap.md#constructor)

### Methods

- [add](search.documentmap.md#add)
- [close](search.documentmap.md#close)
- [get](search.documentmap.md#get)
- [remove](search.documentmap.md#remove)
- [resolve](search.documentmap.md#resolve)

## Constructors

### constructor

\+ **new DocumentMap**(): [*DocumentMap*](search.documentmap.md)

**Returns:** [*DocumentMap*](search.documentmap.md)

## Methods

### add

▸ `Abstract` **add**(`key`: *string*, `value`: [*DocStats*](../interfaces/search.docstats.md)): *Promise*<bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `value` | [*DocStats*](../interfaces/search.docstats.md) |

**Returns:** *Promise*<bigint\>

Defined in: search.ts:75

___

### close

▸ `Abstract` **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: search.ts:82

___

### get

▸ `Abstract` **get**(`docId`: *bigint*): *Promise*<undefined \| [*DocStats*](../interfaces/search.docstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | *bigint* |

**Returns:** *Promise*<undefined \| [*DocStats*](../interfaces/search.docstats.md)\>

Defined in: search.ts:74

___

### remove

▸ `Abstract` **remove**(`key`: *string*): *Promise*<``null`` \| bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Promise*<``null`` \| bigint\>

Defined in: search.ts:76

___

### resolve

▸ `Abstract` **resolve**<I, O\>(`query`: I[], `getter`: (`x`: I) => *bigint*, `putter`: (`x`: I, `y`: [*DocStats*](../interfaces/search.docstats.md)) => O): *Promise*<O[]\>

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
| `putter` | (`x`: I, `y`: [*DocStats*](../interfaces/search.docstats.md)) => O |

**Returns:** *Promise*<O[]\>

Defined in: search.ts:77
