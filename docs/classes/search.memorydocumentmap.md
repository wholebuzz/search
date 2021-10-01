[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [search](../modules/search.md) / MemoryDocumentMap

# Class: MemoryDocumentMap

[search](../modules/search.md).MemoryDocumentMap

## Hierarchy

- [*DocumentMap*](search.documentmap.md)

  ↳ **MemoryDocumentMap**

## Table of contents

### Constructors

- [constructor](search.memorydocumentmap.md#constructor)

### Properties

- [docmap](search.memorydocumentmap.md#docmap)
- [idmap](search.memorydocumentmap.md#idmap)
- [nextDocId](search.memorydocumentmap.md#nextdocid)

### Methods

- [add](search.memorydocumentmap.md#add)
- [close](search.memorydocumentmap.md#close)
- [get](search.memorydocumentmap.md#get)
- [remove](search.memorydocumentmap.md#remove)
- [resolve](search.memorydocumentmap.md#resolve)

## Constructors

### constructor

\+ **new MemoryDocumentMap**(): [*MemoryDocumentMap*](search.memorydocumentmap.md)

**Returns:** [*MemoryDocumentMap*](search.memorydocumentmap.md)

Inherited from: [DocumentMap](search.documentmap.md)

## Properties

### docmap

• **docmap**: *Map*<bigint, [*DocStats*](../interfaces/search.docstats.md)\>

Defined in: search.ts:276

___

### idmap

• **idmap**: *Map*<string, bigint\>

Defined in: search.ts:277

___

### nextDocId

• **nextDocId**: *bigint*

Defined in: search.ts:278

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

Defined in: search.ts:288

___

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:280

___

### get

▸ **get**(`docId`: *bigint*): *Promise*<undefined \| [*DocStats*](../interfaces/search.docstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | *bigint* |

**Returns:** *Promise*<undefined \| [*DocStats*](../interfaces/search.docstats.md)\>

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:284

___

### remove

▸ **remove**(`key`: *string*): *Promise*<``null`` \| bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Promise*<``null`` \| bigint\>

Overrides: [DocumentMap](search.documentmap.md)

Defined in: search.ts:294

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

Defined in: search.ts:306
