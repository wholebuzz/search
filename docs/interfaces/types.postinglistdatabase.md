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

Defined in: [src/types.ts:126](https://github.com/wholebuzz/search/blob/master/src/types.ts#L126)

___

### docids

• `Optional` **docids**: [*DocIdDatabase*](types.dociddatabase.md)

Defined in: [src/types.ts:128](https://github.com/wholebuzz/search/blob/master/src/types.ts#L128)

___

### lexicon

• **lexicon**: [*Lexicon*](types.lexicon.md)

Defined in: [src/types.ts:127](https://github.com/wholebuzz/search/blob/master/src/types.ts#L127)

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

Defined in: [src/types.ts:73](https://github.com/wholebuzz/search/blob/master/src/types.ts#L73)

___

### consolidate

▸ **consolidate**(`precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | *number* |

**Returns:** *Promise*<boolean\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:75](https://github.com/wholebuzz/search/blob/master/src/types.ts#L75)

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:70](https://github.com/wholebuzz/search/blob/master/src/types.ts#L70)

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

Defined in: [src/types.ts:72](https://github.com/wholebuzz/search/blob/master/src/types.ts#L72)

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:79](https://github.com/wholebuzz/search/blob/master/src/types.ts#L79)

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](types.document.md)\>

**Returns:** *Record*<string, [*Document*](types.document.md)\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:76](https://github.com/wholebuzz/search/blob/master/src/types.ts#L76)

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:78](https://github.com/wholebuzz/search/blob/master/src/types.ts#L78)

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:77](https://github.com/wholebuzz/search/blob/master/src/types.ts#L77)

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:80](https://github.com/wholebuzz/search/blob/master/src/types.ts#L80)

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:81](https://github.com/wholebuzz/search/blob/master/src/types.ts#L81)

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:130](https://github.com/wholebuzz/search/blob/master/src/types.ts#L130)

___

### intersect

▸ **intersect**(`x`: [*PostingList*](types.postinglist.md), `y?`: [*PostingList*](types.postinglist.md)): *Promise*<[*Posting*](types.posting.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [*PostingList*](types.postinglist.md) |
| `y?` | [*PostingList*](types.postinglist.md) |

**Returns:** *Promise*<[*Posting*](types.posting.md)[]\>

Defined in: [src/types.ts:132](https://github.com/wholebuzz/search/blob/master/src/types.ts#L132)

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

Defined in: [src/types.ts:133](https://github.com/wholebuzz/search/blob/master/src/types.ts#L133)

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

Defined in: [src/types.ts:74](https://github.com/wholebuzz/search/blob/master/src/types.ts#L74)

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:131](https://github.com/wholebuzz/search/blob/master/src/types.ts#L131)
