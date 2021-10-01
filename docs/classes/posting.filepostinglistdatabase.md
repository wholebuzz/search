[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [posting](../modules/posting.md) / FilePostingListDatabase

# Class: FilePostingListDatabase

[posting](../modules/posting.md).FilePostingListDatabase

## Hierarchy

- [*MemoryPostingListDatabase*](posting.memorypostinglistdatabase.md)

  ↳ **FilePostingListDatabase**

## Table of contents

### Constructors

- [constructor](posting.filepostinglistdatabase.md#constructor)

### Properties

- [blockSize](posting.filepostinglistdatabase.md#blocksize)
- [db](posting.filepostinglistdatabase.md#db)
- [directory](posting.filepostinglistdatabase.md#directory)
- [directoryPrefix](posting.filepostinglistdatabase.md#directoryprefix)
- [docmap](posting.filepostinglistdatabase.md#docmap)
- [flushTrain](posting.filepostinglistdatabase.md#flushtrain)
- [flushing](posting.filepostinglistdatabase.md#flushing)
- [fs](posting.filepostinglistdatabase.md#fs)
- [inAddDoc](posting.filepostinglistdatabase.md#inadddoc)
- [lexicon](posting.filepostinglistdatabase.md#lexicon)
- [prepTasks](posting.filepostinglistdatabase.md#preptasks)
- [sectionWeights](posting.filepostinglistdatabase.md#sectionweights)
- [sections](posting.filepostinglistdatabase.md#sections)
- [shutdownWaiting](posting.filepostinglistdatabase.md#shutdownwaiting)
- [termId](posting.filepostinglistdatabase.md#termid)

### Methods

- [addDoc](posting.filepostinglistdatabase.md#adddoc)
- [consolidate](posting.filepostinglistdatabase.md#consolidate)
- [consolidateIndex](posting.filepostinglistdatabase.md#consolidateindex)
- [defineConfig](posting.filepostinglistdatabase.md#defineconfig)
- [definePrepTasks](posting.filepostinglistdatabase.md#definepreptasks)
- [docName](posting.filepostinglistdatabase.md#docname)
- [flushNext](posting.filepostinglistdatabase.md#flushnext)
- [getConfig](posting.filepostinglistdatabase.md#getconfig)
- [getDocs](posting.filepostinglistdatabase.md#getdocs)
- [getFreq](posting.filepostinglistdatabase.md#getfreq)
- [getIDF](posting.filepostinglistdatabase.md#getidf)
- [getTokens](posting.filepostinglistdatabase.md#gettokens)
- [getTotalCorpusLength](posting.filepostinglistdatabase.md#gettotalcorpuslength)
- [getTotalDocs](posting.filepostinglistdatabase.md#gettotaldocs)
- [getUrl](posting.filepostinglistdatabase.md#geturl)
- [init](posting.filepostinglistdatabase.md#init)
- [intersect](posting.filepostinglistdatabase.md#intersect)
- [intersectNext](posting.filepostinglistdatabase.md#intersectnext)
- [onNewPostingListData](posting.filepostinglistdatabase.md#onnewpostinglistdata)
- [onShutdown](posting.filepostinglistdatabase.md#onshutdown)
- [parseDoc](posting.filepostinglistdatabase.md#parsedoc)
- [removeDoc](posting.filepostinglistdatabase.md#removedoc)
- [scoreEntry](posting.filepostinglistdatabase.md#scoreentry)
- [shutdown](posting.filepostinglistdatabase.md#shutdown)

## Constructors

### constructor

\+ **new FilePostingListDatabase**(`fs`: *FileSystem*, `directory`: *string*, `directoryPrefix?`: *number*, `config?`: *Record*<string, any\>, `docmap?`: [*DocumentMap*](search.documentmap.md)): [*FilePostingListDatabase*](posting.filepostinglistdatabase.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fs` | *FileSystem* | - |
| `directory` | *string* | - |
| `directoryPrefix` | *number* | 2 |
| `config` | *Record*<string, any\> | - |
| `docmap` | [*DocumentMap*](search.documentmap.md) | - |

**Returns:** [*FilePostingListDatabase*](posting.filepostinglistdatabase.md)

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:244

## Properties

### blockSize

• **blockSize**: *number*= 100

Defined in: posting.ts:243

___

### db

• **db**: *Record*<string, [*PostingList*](../interfaces/search.postinglist.md)\>= {}

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[db](posting.memorypostinglistdatabase.md#db)

Defined in: posting.ts:38

___

### directory

• **directory**: *string*

___

### directoryPrefix

• **directoryPrefix**: *number*= 2

___

### docmap

• **docmap**: [*DocumentMap*](search.documentmap.md)

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[docmap](posting.memorypostinglistdatabase.md#docmap)

___

### flushTrain

• **flushTrain**: [*PostingList*](../interfaces/search.postinglist.md)[]= []

Defined in: posting.ts:240

___

### flushing

• **flushing**: ``null`` \| [*PostingList*](../interfaces/search.postinglist.md)= null

Defined in: posting.ts:241

___

### fs

• **fs**: *FileSystem*

___

### inAddDoc

• **inAddDoc**: *number*= 0

Defined in: posting.ts:244

___

### lexicon

• **lexicon**: [*IDFMap*](../interfaces/search.idfmap.md)

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[lexicon](posting.memorypostinglistdatabase.md#lexicon)

Defined in: posting.ts:40

___

### prepTasks

• **prepTasks**: *any*[]

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[prepTasks](posting.memorypostinglistdatabase.md#preptasks)

Defined in: posting.ts:41

___

### sectionWeights

• **sectionWeights**: *number*[]= []

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[sectionWeights](posting.memorypostinglistdatabase.md#sectionweights)

Defined in: posting.ts:43

___

### sections

• **sections**: *string*[]= []

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[sections](posting.memorypostinglistdatabase.md#sections)

Defined in: posting.ts:42

___

### shutdownWaiting

• **shutdownWaiting**: () => *void*[]= []

Defined in: posting.ts:242

___

### termId

• **termId**: *number*= 0

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md).[termId](posting.memorypostinglistdatabase.md#termid)

Defined in: posting.ts:44

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

Defined in: posting.ts:284

___

### consolidate

▸ **consolidate**(`_precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_precision?` | *number* |

**Returns:** *Promise*<boolean\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:354

___

### consolidateIndex

▸ **consolidateIndex**(`index`: [*PostingList*](../interfaces/search.postinglist.md)): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | [*PostingList*](../interfaces/search.postinglist.md) |

**Returns:** *Promise*<void\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:358

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

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

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:74

___

### docName

▸ **docName**(`id`: *string* \| *bigint*): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<string\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:112

___

### flushNext

▸ **flushNext**(`pl`: [*PostingList*](../interfaces/search.postinglist.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pl` | [*PostingList*](../interfaces/search.postinglist.md) |

**Returns:** *void*

Defined in: posting.ts:316

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:212

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](../interfaces/search.document.md)\>

**Returns:** *Record*<string, [*Document*](../interfaces/search.document.md)\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

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

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:184

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:206

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:202

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:216

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:220

___

### getUrl

▸ **getUrl**(`term`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | *string* |

**Returns:** *string*

Defined in: posting.ts:344

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:256

___

### intersect

▸ **intersect**(`plA`: [*PostingList*](../interfaces/search.postinglist.md), `plB?`: [*PostingList*](../interfaces/search.postinglist.md)): *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plA` | [*PostingList*](../interfaces/search.postinglist.md) |
| `plB?` | [*PostingList*](../interfaces/search.postinglist.md) |

**Returns:** *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:416

___

### intersectNext

▸ **intersectNext**(`dataA`: [*PostingEntry*](../interfaces/search.postingentry.md)[], `plB`: [*PostingList*](../interfaces/search.postinglist.md), `_modify?`: *boolean*): *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataA` | [*PostingEntry*](../interfaces/search.postingentry.md)[] | - |
| `plB` | [*PostingList*](../interfaces/search.postinglist.md) | - |
| `_modify` | *boolean* | false |

**Returns:** *Promise*<[*PostingEntry*](../interfaces/search.postingentry.md)[]\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:444

___

### onNewPostingListData

▸ **onNewPostingListData**(`pl`: [*PostingList*](../interfaces/search.postinglist.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pl` | [*PostingList*](../interfaces/search.postinglist.md) |

**Returns:** *void*

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:309

___

### onShutdown

▸ **onShutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: posting.ts:276

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

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:301

___

### scoreEntry

▸ **scoreEntry**(`entry`: [*PostingEntry*](../interfaces/search.postingentry.md), `idf`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [*PostingEntry*](../interfaces/search.postingentry.md) |
| `idf` | *number* |

**Returns:** *void*

Inherited from: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:97

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [MemoryPostingListDatabase](posting.memorypostinglistdatabase.md)

Defined in: posting.ts:268
