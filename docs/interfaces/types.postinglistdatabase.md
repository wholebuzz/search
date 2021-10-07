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

Defined in: [src/types.ts:49](https://github.com/wholebuzz/search/blob/master/src/types.ts#L49)

___

### docids

• `Optional` **docids**: [*DocIdDatabase*](../classes/types.dociddatabase.md)

Defined in: [src/types.ts:51](https://github.com/wholebuzz/search/blob/master/src/types.ts#L51)

___

### lexicon

• **lexicon**: [*IDFMap*](types.idfmap.md)

Defined in: [src/types.ts:50](https://github.com/wholebuzz/search/blob/master/src/types.ts#L50)

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

Defined in: [src/types.ts:78](https://github.com/wholebuzz/search/blob/master/src/types.ts#L78)

___

### consolidate

▸ **consolidate**(`precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | *number* |

**Returns:** *Promise*<boolean\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:80](https://github.com/wholebuzz/search/blob/master/src/types.ts#L80)

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:75](https://github.com/wholebuzz/search/blob/master/src/types.ts#L75)

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

Defined in: [src/types.ts:77](https://github.com/wholebuzz/search/blob/master/src/types.ts#L77)

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:84](https://github.com/wholebuzz/search/blob/master/src/types.ts#L84)

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](types.document.md)\>

**Returns:** *Record*<string, [*Document*](types.document.md)\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:81](https://github.com/wholebuzz/search/blob/master/src/types.ts#L81)

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:83](https://github.com/wholebuzz/search/blob/master/src/types.ts#L83)

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:82](https://github.com/wholebuzz/search/blob/master/src/types.ts#L82)

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:85](https://github.com/wholebuzz/search/blob/master/src/types.ts#L85)

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Inherited from: [DocumentDatabase](types.documentdatabase.md)

Defined in: [src/types.ts:86](https://github.com/wholebuzz/search/blob/master/src/types.ts#L86)

___

### init

▸ **init**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:53](https://github.com/wholebuzz/search/blob/master/src/types.ts#L53)

___

### intersect

▸ **intersect**(`x`: [*PostingList*](types.postinglist.md), `y?`: [*PostingList*](types.postinglist.md)): *Promise*<[*PostingEntry*](types.postingentry.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [*PostingList*](types.postinglist.md) |
| `y?` | [*PostingList*](types.postinglist.md) |

**Returns:** *Promise*<[*PostingEntry*](types.postingentry.md)[]\>

Defined in: [src/types.ts:55](https://github.com/wholebuzz/search/blob/master/src/types.ts#L55)

___

### intersectNext

▸ **intersectNext**(`x`: [*PostingEntry*](types.postingentry.md)[], `y`: [*PostingList*](types.postinglist.md), `modifyX`: *boolean*): *Promise*<[*PostingEntry*](types.postingentry.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [*PostingEntry*](types.postingentry.md)[] |
| `y` | [*PostingList*](types.postinglist.md) |
| `modifyX` | *boolean* |

**Returns:** *Promise*<[*PostingEntry*](types.postingentry.md)[]\>

Defined in: [src/types.ts:56](https://github.com/wholebuzz/search/blob/master/src/types.ts#L56)

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

Defined in: [src/types.ts:79](https://github.com/wholebuzz/search/blob/master/src/types.ts#L79)

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/types.ts:54](https://github.com/wholebuzz/search/blob/master/src/types.ts#L54)
