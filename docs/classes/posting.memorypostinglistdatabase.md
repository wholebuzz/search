[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [posting](../modules/posting.md) / MemoryPostingListDatabase

# Class: MemoryPostingListDatabase

[posting](../modules/posting.md).MemoryPostingListDatabase

## Hierarchy

- **MemoryPostingListDatabase**

  ↳ [*FilePostingListDatabase*](posting.filepostinglistdatabase.md)

## Implements

- [*PostingListDatabase*](../interfaces/search.postinglistdatabase.md)

## Table of contents

### Constructors

- [constructor](posting.memorypostinglistdatabase.md#constructor)

### Properties

- [db](posting.memorypostinglistdatabase.md#db)
- [docmap](posting.memorypostinglistdatabase.md#docmap)
- [lexicon](posting.memorypostinglistdatabase.md#lexicon)
- [prepTasks](posting.memorypostinglistdatabase.md#preptasks)
- [sectionWeights](posting.memorypostinglistdatabase.md#sectionweights)
- [sections](posting.memorypostinglistdatabase.md#sections)
- [termId](posting.memorypostinglistdatabase.md#termid)

### Methods

- [addDoc](posting.memorypostinglistdatabase.md#adddoc)
- [consolidate](posting.memorypostinglistdatabase.md#consolidate)
- [consolidateIndex](posting.memorypostinglistdatabase.md#consolidateindex)
- [defineConfig](posting.memorypostinglistdatabase.md#defineconfig)
- [definePrepTasks](posting.memorypostinglistdatabase.md#definepreptasks)
- [docName](posting.memorypostinglistdatabase.md#docname)
- [getConfig](posting.memorypostinglistdatabase.md#getconfig)
- [getDocs](posting.memorypostinglistdatabase.md#getdocs)
- [getFreq](posting.memorypostinglistdatabase.md#getfreq)
- [getIDF](posting.memorypostinglistdatabase.md#getidf)
- [getTokens](posting.memorypostinglistdatabase.md#gettokens)
- [getTotalCorpusLength](posting.memorypostinglistdatabase.md#gettotalcorpuslength)
- [getTotalDocs](posting.memorypostinglistdatabase.md#gettotaldocs)
- [init](posting.memorypostinglistdatabase.md#init)
- [intersect](posting.memorypostinglistdatabase.md#intersect)
- [intersectNext](posting.memorypostinglistdatabase.md#intersectnext)
- [onNewPostingListData](posting.memorypostinglistdatabase.md#onnewpostinglistdata)
- [parseDoc](posting.memorypostinglistdatabase.md#parsedoc)
- [removeDoc](posting.memorypostinglistdatabase.md#removedoc)
- [scoreEntry](posting.memorypostinglistdatabase.md#scoreentry)
- [shutdown](posting.memorypostinglistdatabase.md#shutdown)

## Constructors

### constructor

\+ **new MemoryPostingListDatabase**(`config?`: *Record*<string, any\>): [*MemoryPostingListDatabase*](posting.memorypostinglistdatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** [*MemoryPostingListDatabase*](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:44

## Properties

### db

• **db**: *Record*<string, [*PostingList*](../interfaces/search.postinglist.md)\>= {}

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md).[db](../interfaces/search.postinglistdatabase.md#db)

Defined in: posting.ts:38

___

### docmap

• `Optional` **docmap**: [*DocumentMap*](search.documentmap.md)

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md).[docmap](../interfaces/search.postinglistdatabase.md#docmap)

Defined in: posting.ts:39

___

### lexicon

• **lexicon**: [*IDFMap*](../interfaces/search.idfmap.md)

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md).[lexicon](../interfaces/search.postinglistdatabase.md#lexicon)

Defined in: posting.ts:40

___

### prepTasks

• **prepTasks**: *any*[]

Defined in: posting.ts:41

___

### sectionWeights

• **sectionWeights**: *number*[]= []

Defined in: posting.ts:43

___

### sections

• **sections**: *string*[]= []

Defined in: posting.ts:42

___

### termId

• **termId**: *number*= 0

Defined in: posting.ts:44

## Methods

### addDoc

▸ **addDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*, `_version?`: Date): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |
| `_version?` | Date |

**Returns:** *Promise*<number\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:142

___

### consolidate

▸ **consolidate**(`_precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_precision?` | *number* |

**Returns:** *Promise*<boolean\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:79

___

### consolidateIndex

▸ **consolidateIndex**(`index`: [*PostingList*](../interfaces/search.postinglist.md)): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | [*PostingList*](../interfaces/search.postinglist.md) |

**Returns:** *Promise*<void\>

Defined in: posting.ts:88

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:66

___

### definePrepTasks

▸ **definePrepTasks**(`tasks`: Function[], `_field?`: *string*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | Function[] |
| `_field?` | *string* |

**Returns:** *number*

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:74

___

### docName

▸ **docName**(`id`: *string* \| *bigint*): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<string\>

Defined in: posting.ts:112

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:212

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](../interfaces/search.document.md)\>

**Returns:** *Record*<string, [*Document*](../interfaces/search.document.md)\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:198

___

### getFreq

▸ **getFreq**(`occurrences`: *ArrayLike*<number\>, `sections`: *ArrayLike*<number\>): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `occurrences` | *ArrayLike*<number\> |
| `sections` | *ArrayLike*<number\> |

**Returns:** *number*

Defined in: posting.ts:184

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:206

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:202

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:216

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:220

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:58

___

### intersect

▸ **intersect**(`plA`: [*PostingList*](../interfaces/search.postinglist.md), `plB?`: [*PostingList*](../interfaces/search.postinglist.md)): *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plA` | [*PostingList*](../interfaces/search.postinglist.md) |
| `plB?` | [*PostingList*](../interfaces/search.postinglist.md) |

**Returns:** *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:224

___

### intersectNext

▸ **intersectNext**(`dataA`: [*PostingEntry*](../interfaces/search.postingentry.md)[], `plB`: [*PostingList*](../interfaces/search.postinglist.md), `modify?`: *boolean*): *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataA` | [*PostingEntry*](../interfaces/search.postingentry.md)[] | - |
| `plB` | [*PostingList*](../interfaces/search.postinglist.md) | - |
| `modify` | *boolean* | false |

**Returns:** *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:228

___

### onNewPostingListData

▸ **onNewPostingListData**(`_pl`: [*PostingList*](../interfaces/search.postinglist.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pl` | [*PostingList*](../interfaces/search.postinglist.md) |

**Returns:** *void*

Defined in: posting.ts:108

___

### parseDoc

▸ **parseDoc**(`doc`: *Record*<string, string\>, `sections`: *number*[], `uniqueTokens`: *Record*<string, number[]\>): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `sections` | *number*[] |
| `uniqueTokens` | *Record*<string, number[]\> |

**Returns:** *number*

Defined in: posting.ts:118

___

### removeDoc

▸ **removeDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<number\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:166

___

### scoreEntry

▸ **scoreEntry**(`entry`: [*PostingEntry*](../interfaces/search.postingentry.md), `idf`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [*PostingEntry*](../interfaces/search.postingentry.md) |
| `idf` | *number* |

**Returns:** *void*

Defined in: posting.ts:97

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Implementation of: [PostingListDatabase](../interfaces/search.postinglistdatabase.md)

Defined in: posting.ts:62
