[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / DocumentDatabase

# Interface: DocumentDatabase

[types](../modules/types.md).DocumentDatabase

## Hierarchy

- **DocumentDatabase**

  ↳ [*PostingListDatabase*](types.postinglistdatabase.md)

## Table of contents

### Methods

- [addDoc](types.documentdatabase.md#adddoc)
- [consolidate](types.documentdatabase.md#consolidate)
- [defineConfig](types.documentdatabase.md#defineconfig)
- [definePrepTasks](types.documentdatabase.md#definepreptasks)
- [getConfig](types.documentdatabase.md#getconfig)
- [getDocs](types.documentdatabase.md#getdocs)
- [getIDF](types.documentdatabase.md#getidf)
- [getTokens](types.documentdatabase.md#gettokens)
- [getTotalCorpusLength](types.documentdatabase.md#gettotalcorpuslength)
- [getTotalDocs](types.documentdatabase.md#gettotaldocs)
- [removeDoc](types.documentdatabase.md#removedoc)

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

Defined in: [src/types.ts:78](https://github.com/wholebuzz/search/blob/master/src/types.ts#L78)

___

### consolidate

▸ **consolidate**(`precision?`: *number*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | *number* |

**Returns:** *Promise*<boolean\>

Defined in: [src/types.ts:80](https://github.com/wholebuzz/search/blob/master/src/types.ts#L80)

___

### defineConfig

▸ **defineConfig**(`config`: *Record*<string, any\>): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | *Record*<string, any\> |

**Returns:** *boolean*

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

Defined in: [src/types.ts:77](https://github.com/wholebuzz/search/blob/master/src/types.ts#L77)

___

### getConfig

▸ **getConfig**(): *Record*<string, any\>

**Returns:** *Record*<string, any\>

Defined in: [src/types.ts:84](https://github.com/wholebuzz/search/blob/master/src/types.ts#L84)

___

### getDocs

▸ **getDocs**(): *Record*<string, [*Document*](types.document.md)\>

**Returns:** *Record*<string, [*Document*](types.document.md)\>

Defined in: [src/types.ts:81](https://github.com/wholebuzz/search/blob/master/src/types.ts#L81)

___

### getIDF

▸ **getIDF**(): *number*[]

**Returns:** *number*[]

Defined in: [src/types.ts:83](https://github.com/wholebuzz/search/blob/master/src/types.ts#L83)

___

### getTokens

▸ **getTokens**(): *Record*<string, number\>

**Returns:** *Record*<string, number\>

Defined in: [src/types.ts:82](https://github.com/wholebuzz/search/blob/master/src/types.ts#L82)

___

### getTotalCorpusLength

▸ **getTotalCorpusLength**(): *number*

**Returns:** *number*

Defined in: [src/types.ts:85](https://github.com/wholebuzz/search/blob/master/src/types.ts#L85)

___

### getTotalDocs

▸ **getTotalDocs**(): *number*

**Returns:** *number*

Defined in: [src/types.ts:86](https://github.com/wholebuzz/search/blob/master/src/types.ts#L86)

___

### removeDoc

▸ **removeDoc**(`doc`: *Record*<string, string\>, `id`: *string* \| *bigint*): *Promise*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Record*<string, string\> |
| `id` | *string* \| *bigint* |

**Returns:** *Promise*<number\>

Defined in: [src/types.ts:79](https://github.com/wholebuzz/search/blob/master/src/types.ts#L79)
