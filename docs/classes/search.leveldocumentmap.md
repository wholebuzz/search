[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [search](../modules/search.md) / LevelDocumentMap

# Class: LevelDocumentMap

[search](../modules/search.md).LevelDocumentMap

## Hierarchy

- [*DocumentMap*](search.documentmap.md)

  ↳ **LevelDocumentMap**

## Table of contents

### Constructors

- [constructor](search.leveldocumentmap.md#constructor)

### Properties

- [db](search.leveldocumentmap.md#db)
- [docmap](search.leveldocumentmap.md#docmap)
- [idmap](search.leveldocumentmap.md#idmap)
- [nextDocId](search.leveldocumentmap.md#nextdocid)
- [path](search.leveldocumentmap.md#path)

### Methods

- [add](search.leveldocumentmap.md#add)
- [close](search.leveldocumentmap.md#close)
- [get](search.leveldocumentmap.md#get)
- [remove](search.leveldocumentmap.md#remove)
- [resolve](search.leveldocumentmap.md#resolve)

## Constructors

### constructor

\+ **new LevelDocumentMap**(`path`: *string*): [*LevelDocumentMap*](search.leveldocumentmap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** [*LevelDocumentMap*](search.leveldocumentmap.md)

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:320

## Properties

### db

• **db**: *LevelDB*<any, any\>

Defined in: search.ts:318

___

### docmap

• **docmap**: *LevelUp*<AbstractLevelDOWN<any, any\>, AbstractIterator<any, any\>\>

Defined in: search.ts:319

___

### idmap

• **idmap**: *LevelUp*<AbstractLevelDOWN<any, any\>, AbstractIterator<any, any\>\>

Defined in: search.ts:320

___

### nextDocId

• **nextDocId**: *bigint*

Defined in: search.ts:317

___

### path

• **path**: *string*

## Methods

### add

▸ **add**(`key`: *string*, `value`: [*DocStats*](../interfaces/search.docstats.md)): *Promise*<bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `value` | [*DocStats*](../interfaces/search.docstats.md) |

**Returns:** *Promise*<bigint\>

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:343

___

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:329

___

### get

▸ **get**(`docId`: *bigint*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | *bigint* |

**Returns:** *Promise*<any\>

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:335

___

### remove

▸ **remove**(`key`: *string*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Promise*<any\>

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:353

___

### resolve

▸ **resolve**<I, O\>(`query`: I[], `getter`: (`x`: I) => *bigint*, `putter`: (`x`: I, `y`: [*DocStats*](../interfaces/search.docstats.md)) => O): *Promise*<O[]\>

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

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:364
