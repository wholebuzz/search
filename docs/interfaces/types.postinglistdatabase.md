[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / PostingListDatabase

# Interface: PostingListDatabase

[types](../modules/types.md).PostingListDatabase

## Hierarchy

- [*DocumentDatabase*](types.documentdatabase.md)

  ↳ **PostingListDatabase**

## Implemented by

- [*MemoryPostingListDatabase*](../classes/posting.memorypostinglistdatabase.md)

## Table of contents

### Properties

- [db](types.postinglistdatabase.md#db)
- [docids](types.postinglistdatabase.md#docids)
- [lexicon](types.postinglistdatabase.md#lexicon)

### Methods

- [addDoc](types.postinglistdatabase.md#adddoc)
- [consolidate](types.postinglistdatabase.md#consolidate)
- [defineConfig](types.postinglistdatabase.md#defineconfig)
- [definePrepTasks](types.postinglistdatabase.md#definepreptasks)
- [getConfig](types.postinglistdatabase.md#getconfig)
- [getDocs](types.postinglistdatabase.md#getdocs)
- [getIDF](types.postinglistdatabase.md#getidf)
- [getTokens](types.postinglistdatabase.md#gettokens)
- [getTotalCorpusLength](types.postinglistdatabase.md#gettotalcorpuslength)
- [getTotalDocs](types.postinglistdatabase.md#gettotaldocs)
- [init](types.postinglistdatabase.md#init)
- [intersect](types.postinglistdatabase.md#intersect)
- [intersectNext](types.postinglistdatabase.md#intersectnext)
- [removeDoc](types.postinglistdatabase.md#removedoc)
- [shutdown](types.postinglistdatabase.md#shutdown)

## Properties

### db

• **db**: *Record*<string, [*PostingList*](types.postinglist.md)\>

Defined in: [src/types.ts:86](https://github.com/wholebuzz/search/blob/master/src/types.ts#L86)

___

### docids

• `Optional` **docids**: [*DocIdDatabase*](types.dociddatabase.md)

Defined in: [src/types.ts:88](https://github.com/wholebuzz/search/blob/master/src/types.ts#L88)

___

### lexicon

• **lexicon**: [*IDFMap*](types.idfmap.md)

Defined in: [src/types.ts:87](https://github.com/wholebuzz/search/blob/master/src/types.ts#L87)

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

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:64](https://github.com/wholebuzz/search/blob/master/src/types.ts#L64)

___

### consolidate

▸ **consolidate**(`precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | *number* |

**Returns:** *Promise*<boolean\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:66](https://github.com/wholebuzz/search/blob/master/src/types.ts#L66)

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:61](https://github.com/wholebuzz/search/blob/master/src/types.ts#L61)

___

### definePrepTasks

▸ **definePrepTasks**(`tasks`: Function[], `field?`: *string*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | Function[] |
| `field?` | *string* |

**Returns:** *number*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:63](https://github.com/wholebuzz/search/blob/master/src/types.ts#L63)

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:70](https://github.com/wholebuzz/search/blob/master/src/types.ts#L70)

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](types.document.md)\>

**Returns:** *Record*<string, [*Document*](types.document.md)\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:67](https://github.com/wholebuzz/search/blob/master/src/types.ts#L67)

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:69](https://github.com/wholebuzz/search/blob/master/src/types.ts#L69)

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:68](https://github.com/wholebuzz/search/blob/master/src/types.ts#L68)

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:71](https://github.com/wholebuzz/search/blob/master/src/types.ts#L71)

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:72](https://github.com/wholebuzz/search/blob/master/src/types.ts#L72)

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:90](https://github.com/wholebuzz/search/blob/master/src/types.ts#L90)

___

### intersect

▸ **intersect**(`x`: [*PostingList*](types.postinglist.md), `y?`: [*PostingList*](types.postinglist.md)): *Promise*<[*Posting*](types.posting.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [*PostingList*](types.postinglist.md) |
| `y?` | [*PostingList*](types.postinglist.md) |

**Returns:** *Promise*<[*Posting*](types.posting.md)[]\>

Defined in: [src/types.ts:92](https://github.com/wholebuzz/search/blob/master/src/types.ts#L92)

___

### intersectNext

▸ **intersectNext**(`x`: [*Posting*](types.posting.md)[], `y`: [*PostingList*](types.postinglist.md), `modifyX`: *boolean*): *Promise*<[*Posting*](types.posting.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [*Posting*](types.posting.md)[] |
| `y` | [*PostingList*](types.postinglist.md) |
| `modifyX` | *boolean* |

**Returns:** *Promise*<[*Posting*](types.posting.md)[]\>

Defined in: [src/types.ts:93](https://github.com/wholebuzz/search/blob/master/src/types.ts#L93)

___

### removeDoc

▸ **removeDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<number\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:65](https://github.com/wholebuzz/search/blob/master/src/types.ts#L65)

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:91](https://github.com/wholebuzz/search/blob/master/src/types.ts#L91)
