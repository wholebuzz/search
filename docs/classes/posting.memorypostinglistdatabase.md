[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [posting](../modules/posting.md) / MemoryPostingListDatabase

# Class: MemoryPostingListDatabase

[posting](../modules/posting.md).MemoryPostingListDatabase

## Hierarchy

- **MemoryPostingListDatabase**

  ↳ [*FilePostingListDatabase*](db.filepostinglistdatabase.md)

## Implements

- [*PostingListDatabase*](../interfaces/types.postinglistdatabase.md)

## Table of contents

### Constructors

- [constructor](posting.memorypostinglistdatabase.md#constructor)

### Properties

- [config](posting.memorypostinglistdatabase.md#config)
- [db](posting.memorypostinglistdatabase.md#db)
- [docids](posting.memorypostinglistdatabase.md#docids)
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
- [scorePosting](posting.memorypostinglistdatabase.md#scoreposting)
- [shutdown](posting.memorypostinglistdatabase.md#shutdown)

## Constructors

### constructor

\+ **new MemoryPostingListDatabase**(`config`: *Record*<string, any\>): [*MemoryPostingListDatabase*](posting.memorypostinglistdatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** [*MemoryPostingListDatabase*](posting.memorypostinglistdatabase.md)

Defined in: [src/posting.ts:25](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L25)

## Properties

### config

• **config**: *Record*<string, any\>

___

### db

• **db**: *Record*<string, [*PostingList*](../interfaces/types.postinglist.md)\>= {}

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md).[db](../interfaces/types.postinglistdatabase.md#db)

Defined in: [src/posting.ts:19](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L19)

___

### docids

• `Optional` **docids**: [*DocIdDatabase*](../interfaces/types.dociddatabase.md)

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md).[docids](../interfaces/types.postinglistdatabase.md#docids)

Defined in: [src/posting.ts:20](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L20)

___

### lexicon

• **lexicon**: [*Lexicon*](../interfaces/types.lexicon.md)

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md).[lexicon](../interfaces/types.postinglistdatabase.md#lexicon)

Defined in: [src/posting.ts:21](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L21)

___

### prepTasks

• **prepTasks**: *any*[]

Defined in: [src/posting.ts:22](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L22)

___

### sectionWeights

• **sectionWeights**: *number*[]= []

Defined in: [src/posting.ts:24](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L24)

___

### sections

• **sections**: *string*[]= []

Defined in: [src/posting.ts:23](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L23)

___

### termId

• **termId**: *number*= 0

Defined in: [src/posting.ts:25](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L25)

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

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:123](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L123)

___

### consolidate

▸ **consolidate**(`_precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_precision?` | *number* |

**Returns:** *Promise*<boolean\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:60](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L60)

___

### consolidateIndex

▸ **consolidateIndex**(`index`: [*PostingList*](../interfaces/types.postinglist.md)): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | [*PostingList*](../interfaces/types.postinglist.md) |

**Returns:** *Promise*<void\>

Defined in: [src/posting.ts:69](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L69)

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

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

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:55](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L55)

___

### docName

▸ **docName**(`id`: *string* \| *bigint*): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<string\>

Defined in: [src/posting.ts:93](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L93)

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:193](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L193)

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](../interfaces/types.document.md)\>

**Returns:** *Record*<string, [*Document*](../interfaces/types.document.md)\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

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

Defined in: [src/posting.ts:165](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L165)

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:187](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L187)

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:183](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L183)

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:197](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L197)

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:201](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L201)

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:39](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L39)

___

### intersect

▸ **intersect**(`plA`: [*PostingList*](../interfaces/types.postinglist.md), `plB?`: [*PostingList*](../interfaces/types.postinglist.md)): *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plA` | [*PostingList*](../interfaces/types.postinglist.md) |
| `plB?` | [*PostingList*](../interfaces/types.postinglist.md) |

**Returns:** *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:205](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L205)

___

### intersectNext

▸ **intersectNext**(`dataA`: [*Posting*](../interfaces/types.posting.md)[], `plB`: [*PostingList*](../interfaces/types.postinglist.md), `modify?`: *boolean*): *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataA` | [*Posting*](../interfaces/types.posting.md)[] | - |
| `plB` | [*PostingList*](../interfaces/types.postinglist.md) | - |
| `modify` | *boolean* | false |

**Returns:** *Promise*<[*Posting*](../interfaces/types.posting.md)[]\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:209](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L209)

___

### onNewPostingListData

▸ **onNewPostingListData**(`_pl`: [*PostingList*](../interfaces/types.postinglist.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pl` | [*PostingList*](../interfaces/types.postinglist.md) |

**Returns:** *void*

Defined in: [src/posting.ts:89](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L89)

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

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:147](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L147)

___

### scorePosting

▸ **scorePosting**(`posting`: [*Posting*](../interfaces/types.posting.md), `idf`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `posting` | [*Posting*](../interfaces/types.posting.md) |
| `idf` | *number* |

**Returns:** *void*

Defined in: [src/posting.ts:78](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L78)

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Implementation of: [PostingListDatabase](../interfaces/types.postinglistdatabase.md)

Defined in: [src/posting.ts:43](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L43)
