[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [search](../modules/search.md) / DocumentDatabase

# Interface: DocumentDatabase

[search](../modules/search.md).DocumentDatabase

## Hierarchy

- **DocumentDatabase**

  ↳ [*PostingListDatabase*](search.postinglistdatabase.md)

## Table of contents

### Methods

- [addDoc](search.documentdatabase.md#adddoc)
- [consolidate](search.documentdatabase.md#consolidate)
- [defineConfig](search.documentdatabase.md#defineconfig)
- [definePrepTasks](search.documentdatabase.md#definepreptasks)
- [getConfig](search.documentdatabase.md#getconfig)
- [getDocs](search.documentdatabase.md#getdocs)
- [getIDF](search.documentdatabase.md#getidf)
- [getTokens](search.documentdatabase.md#gettokens)
- [getTotalCorpusLength](search.documentdatabase.md#gettotalcorpuslength)
- [getTotalDocs](search.documentdatabase.md#gettotaldocs)
- [removeDoc](search.documentdatabase.md#removedoc)

## Methods

### addDoc

▸ **addDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*, `version?`: Date): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |
| `version?` | Date |

**Returns:** *Promise*<number\>

Defined in: search.ts:36

___

### consolidate

▸ **consolidate**(`precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | *number* |

**Returns:** *Promise*<boolean\>

Defined in: search.ts:38

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Defined in: search.ts:33

___

### definePrepTasks

▸ **definePrepTasks**(`tasks`: Function[], `field?`: *string*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | Function[] |
| `field?` | *string* |

**Returns:** *number*

Defined in: search.ts:35

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Defined in: search.ts:42

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](search.document.md)\>

**Returns:** *Record*<string, [*Document*](search.document.md)\>

Defined in: search.ts:39

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Defined in: search.ts:41

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Defined in: search.ts:40

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Defined in: search.ts:43

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Defined in: search.ts:44

___

### removeDoc

▸ **removeDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<number\>

Defined in: search.ts:37
