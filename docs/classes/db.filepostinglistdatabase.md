[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [db](../modules/db.md) / FilePostingListDatabase

# Class: FilePostingListDatabase

[db](../modules/db.md).FilePostingListDatabase

## Hierarchy

- [*MemoryPostingListDatabase*](posting.memorypostinglistdatabase.md)

  ↳ **FilePostingListDatabase**

## Table of contents

### Constructors

- [constructor](db.filepostinglistdatabase.md#constructor)

### Properties

- [blockSize](db.filepostinglistdatabase.md#blocksize)
- [config](db.filepostinglistdatabase.md#config)
- [db](db.filepostinglistdatabase.md#db)
- [directory](db.filepostinglistdatabase.md#directory)
- [directoryPrefix](db.filepostinglistdatabase.md#directoryprefix)
- [docids](db.filepostinglistdatabase.md#docids)
- [flushTrain](db.filepostinglistdatabase.md#flushtrain)
- [flushing](db.filepostinglistdatabase.md#flushing)
- [fs](db.filepostinglistdatabase.md#fs)
- [inAddDoc](db.filepostinglistdatabase.md#inadddoc)
- [lexicon](db.filepostinglistdatabase.md#lexicon)
- [prepTasks](db.filepostinglistdatabase.md#preptasks)
- [sectionWeights](db.filepostinglistdatabase.md#sectionweights)
- [sections](db.filepostinglistdatabase.md#sections)
- [shutdownWaiting](db.filepostinglistdatabase.md#shutdownwaiting)
- [termId](db.filepostinglistdatabase.md#termid)

### Methods

- [addDoc](db.filepostinglistdatabase.md#adddoc)
- [consolidate](db.filepostinglistdatabase.md#consolidate)
- [consolidateIndex](db.filepostinglistdatabase.md#consolidateindex)
- [defineConfig](db.filepostinglistdatabase.md#defineconfig)
- [definePrepTasks](db.filepostinglistdatabase.md#definepreptasks)
- [docName](db.filepostinglistdatabase.md#docname)
- [flushNext](db.filepostinglistdatabase.md#flushnext)
- [getConfig](db.filepostinglistdatabase.md#getconfig)
- [getDocs](db.filepostinglistdatabase.md#getdocs)
- [getFreq](db.filepostinglistdatabase.md#getfreq)
- [getIDF](db.filepostinglistdatabase.md#getidf)
- [getTokens](db.filepostinglistdatabase.md#gettokens)
- [getTotalCorpusLength](db.filepostinglistdatabase.md#gettotalcorpuslength)
- [getTotalDocs](db.filepostinglistdatabase.md#gettotaldocs)
- [getUrl](db.filepostinglistdatabase.md#geturl)
- [init](db.filepostinglistdatabase.md#init)
- [intersect](db.filepostinglistdatabase.md#intersect)
- [intersectNext](db.filepostinglistdatabase.md#intersectnext)
- [onNewPostingListData](db.filepostinglistdatabase.md#onnewpostinglistdata)
- [onShutdown](db.filepostinglistdatabase.md#onshutdown)
- [parseDoc](db.filepostinglistdatabase.md#parsedoc)
- [removeDoc](db.filepostinglistdatabase.md#removedoc)
- [scorePosting](db.filepostinglistdatabase.md#scoreposting)
- [shutdown](db.filepostinglistdatabase.md#shutdown)

## Constructors

### constructor

\+ **new FilePostingListDatabase**(`fs`: *FileSystem*, `directory`: *string*, `directoryPrefix`: *number*, `config`: *Record*<string, any\>, `docids?`: [*DocIdDatabase*](../interfaces/types.dociddatabase.md)): [*FilePostingListDatabase*](db.filepostinglistdatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | *FileSystem* |
| `directory` | *string* |
| `directoryPrefix` | *number* |
| `config` | *Record*<string, any\> |
| `docids` | [*DocIdDatabase*](../interfaces/types.dociddatabase.md) |

**Returns:** [*FilePostingListDatabase*](db.filepostinglistdatabase.md)

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:27](https://github.com/wholebuzz/search/blob/master/src/db.ts#L27)

## Properties

### blockSize

• **blockSize**: *number*= 100

Defined in: [src/db.ts:26](https://github.com/wholebuzz/search/blob/master/src/db.ts#L26)

___

### config

• **config**: *Record*<string, any\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[config](posting.memorypostinglistdatabase.md#config)

___

### db

• **db**: *Record*<string, [*PostingList*](../interfaces/types.postinglist.md)\>= {}

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[db](posting.memorypostinglistdatabase.md#db)

Defined in: [src/posting.ts:19](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L19)

___

### directory

• **directory**: *string*

___

### directoryPrefix

• **directoryPrefix**: *number*

___

### docids

• **docids**: [*DocIdDatabase*](../interfaces/types.dociddatabase.md)

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[docids](posting.memorypostinglistdatabase.md#docids)

___

### flushTrain

• **flushTrain**: [*PostingList*](../interfaces/types.postinglist.md)[]= []

Defined in: [src/db.ts:23](https://github.com/wholebuzz/search/blob/master/src/db.ts#L23)

___

### flushing

• **flushing**: ``null`` \| [*PostingList*](../interfaces/types.postinglist.md)= null

Defined in: [src/db.ts:24](https://github.com/wholebuzz/search/blob/master/src/db.ts#L24)

___

### fs

• **fs**: *FileSystem*

___

### inAddDoc

• **inAddDoc**: *number*= 0

Defined in: [src/db.ts:27](https://github.com/wholebuzz/search/blob/master/src/db.ts#L27)

___

### lexicon

• **lexicon**: [*IDFMap*](../interfaces/types.idfmap.md)

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[lexicon](posting.memorypostinglistdatabase.md#lexicon)

Defined in: [src/posting.ts:21](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L21)

___

### prepTasks

• **prepTasks**: *any*[]

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[prepTasks](posting.memorypostinglistdatabase.md#preptasks)

Defined in: [src/posting.ts:22](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L22)

___

### sectionWeights

• **sectionWeights**: *number*[]= []

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[sectionWeights](posting.memorypostinglistdatabase.md#sectionweights)

Defined in: [src/posting.ts:24](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L24)

___

### sections

• **sections**: *string*[]= []

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[sections](posting.memorypostinglistdatabase.md#sections)

Defined in: [src/posting.ts:23](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L23)

___

### shutdownWaiting

• **shutdownWaiting**: () => *void*[]= []

Defined in: [src/db.ts:25](https://github.com/wholebuzz/search/blob/master/src/db.ts#L25)

___

### termId

• **termId**: *number*= 0

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[termId](posting.memorypostinglistdatabase.md#termid)

Defined in: [src/posting.ts:25](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L25)

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

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:71](https://github.com/wholebuzz/search/blob/master/src/db.ts#L71)

___

### consolidate

▸ **consolidate**(`_precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_precision?` | *number* |

**Returns:** *Promise*<boolean\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:141](https://github.com/wholebuzz/search/blob/master/src/db.ts#L141)

___

### consolidateIndex

▸ **consolidateIndex**(`index`: [*PostingList*](../interfaces/types.postinglist.md)): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | [*PostingList*](../interfaces/types.postinglist.md) |

**Returns:** *Promise*<void\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:145](https://github.com/wholebuzz/search/blob/master/src/db.ts#L145)

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:47](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L47)

___

### definePrepTasks

▸ **definePrepTasks**(`tasks`: Function[], `_field?`: *string*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | Function[] |
| `_field?` | *string* |

**Returns:** *number*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:55](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L55)

___

### docName

▸ **docName**(`id`: *string* \| *bigint*): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<string\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:93](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L93)

___

### flushNext

▸ **flushNext**(`pl`: [*PostingList*](../interfaces/types.postinglist.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pl` | [*PostingList*](../interfaces/types.postinglist.md) |

**Returns:** *void*

Defined in: [src/db.ts:103](https://github.com/wholebuzz/search/blob/master/src/db.ts#L103)

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:193](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L193)

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](../interfaces/types.document.md)\>

**Returns:** *Record*<string, [*Document*](../interfaces/types.document.md)\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:179](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L179)

___

### getFreq

▸ **getFreq**(`occurrences`: *ArrayLike*<number\>, `sections`: *ArrayLike*<number\>): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `occurrences` | *ArrayLike*<number\> |
| `sections` | *ArrayLike*<number\> |

**Returns:** *number*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:165](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L165)

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:187](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L187)

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:183](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L183)

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:197](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L197)

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:201](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L201)

___

### getUrl

▸ **getUrl**(`term`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | *string* |

**Returns:** *string*

Defined in: [src/db.ts:131](https://github.com/wholebuzz/search/blob/master/src/db.ts#L131)

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:39](https://github.com/wholebuzz/search/blob/master/src/db.ts#L39)

___

### intersect

▸ **intersect**(`plA`: [*PostingList*](../interfaces/types.postinglist.md), `plB?`: [*PostingList*](../interfaces/types.postinglist.md)): *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plA` | [*PostingList*](../interfaces/types.postinglist.md) |
| `plB?` | [*PostingList*](../interfaces/types.postinglist.md) |

**Returns:** *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:203](https://github.com/wholebuzz/search/blob/master/src/db.ts#L203)

___

### intersectNext

▸ **intersectNext**(`dataA`: [*Posting*](../interfaces/types.posting.md)[], `plB`: [*PostingList*](../interfaces/types.postinglist.md), `_modify?`: *boolean*): *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataA` | [*Posting*](../interfaces/types.posting.md)[] | - |
| `plB` | [*PostingList*](../interfaces/types.postinglist.md) | - |
| `_modify` | *boolean* | false |

**Returns:** *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:229](https://github.com/wholebuzz/search/blob/master/src/db.ts#L229)

___

### onNewPostingListData

▸ **onNewPostingListData**(`pl`: [*PostingList*](../interfaces/types.postinglist.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pl` | [*PostingList*](../interfaces/types.postinglist.md) |

**Returns:** *void*

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:96](https://github.com/wholebuzz/search/blob/master/src/db.ts#L96)

___

### onShutdown

▸ **onShutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/db.ts:63](https://github.com/wholebuzz/search/blob/master/src/db.ts#L63)

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

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:99](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L99)

___

### removeDoc

▸ **removeDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<number\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:88](https://github.com/wholebuzz/search/blob/master/src/db.ts#L88)

___

### scorePosting

▸ **scorePosting**(`posting`: [*Posting*](../interfaces/types.posting.md), `idf`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `posting` | [*Posting*](../interfaces/types.posting.md) |
| `idf` | *number* |

**Returns:** *void*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:78](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L78)

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: [src/db.ts:55](https://github.com/wholebuzz/search/blob/master/src/db.ts#L55)
