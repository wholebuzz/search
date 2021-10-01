[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [search](../modules/search.md) / PostingListDatabase

# Interface: PostingListDatabase

[search](../modules/search.md).PostingListDatabase

## Hierarchy

- [*DocumentDatabase*](search.documentdatabase.md)

  ↳ **PostingListDatabase**

## Implemented by

- [*MemoryPostingListDatabase*](../classes/posting.memorypostinglistdatabase.md)

## Table of contents

### Properties

- [db](search.postinglistdatabase.md#db)
- [docmap](search.postinglistdatabase.md#docmap)
- [lexicon](search.postinglistdatabase.md#lexicon)

### Methods

- [addDoc](search.postinglistdatabase.md#adddoc)
- [consolidate](search.postinglistdatabase.md#consolidate)
- [defineConfig](search.postinglistdatabase.md#defineconfig)
- [definePrepTasks](search.postinglistdatabase.md#definepreptasks)
- [getConfig](search.postinglistdatabase.md#getconfig)
- [getDocs](search.postinglistdatabase.md#getdocs)
- [getIDF](search.postinglistdatabase.md#getidf)
- [getTokens](search.postinglistdatabase.md#gettokens)
- [getTotalCorpusLength](search.postinglistdatabase.md#gettotalcorpuslength)
- [getTotalDocs](search.postinglistdatabase.md#gettotaldocs)
- [init](search.postinglistdatabase.md#init)
- [intersect](search.postinglistdatabase.md#intersect)
- [intersectNext](search.postinglistdatabase.md#intersectnext)
- [removeDoc](search.postinglistdatabase.md#removedoc)
- [shutdown](search.postinglistdatabase.md#shutdown)

## Properties

### db

• **db**: *Record*<string, [*PostingList*](search.postinglist.md)\>

Defined in: search.ts:104

___

### docmap

• `Optional` **docmap**: [*DocumentMap*](../classes/search.documentmap.md)

Defined in: search.ts:106

___

### lexicon

• **lexicon**: [*IDFMap*](search.idfmap.md)

Defined in: search.ts:105

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

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:36

___

### consolidate

▸ **consolidate**(`precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | *number* |

**Returns:** *Promise*<boolean\>

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:38

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Inherited from: [DocumentDatabase](search.documentdatabase.md)

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

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:35

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:42

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](search.document.md)\>

**Returns:** *Record*<string, [*Document*](search.document.md)\>

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:39

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:41

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:40

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:43

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:44

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: search.ts:108

___

### intersect

▸ **intersect**(`x`: [*PostingList*](search.postinglist.md), `y?`: [*PostingList*](search.postinglist.md)): *Promise*<[*PostingEntry*](search.postingentry.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [*PostingList*](search.postinglist.md) |
| `y?` | [*PostingList*](search.postinglist.md) |

**Returns:** *Promise*<[*PostingEntry*](search.postingentry.md)[]\>

Defined in: search.ts:110

___

### intersectNext

▸ **intersectNext**(`x`: [*PostingEntry*](search.postingentry.md)[], `y`: [*PostingList*](search.postinglist.md), `modifyX`: *boolean*): *Promise*<[*PostingEntry*](search.postingentry.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [*PostingEntry*](search.postingentry.md)[] |
| `y` | [*PostingList*](search.postinglist.md) |
| `modifyX` | *boolean* |

**Returns:** *Promise*<[*PostingEntry*](search.postingentry.md)[]\>

Defined in: search.ts:111

___

### removeDoc

▸ **removeDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<number\>

Inherited from: [DocumentDatabase](search.documentdatabase.md)

Defined in: search.ts:37

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: search.ts:109
