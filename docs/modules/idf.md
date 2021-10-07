[@wholebuzz/search](../README.md) / [Exports](../modules.md) / idf

# Module: idf

## Table of contents

### Variables

- [mapObject](idf.md#mapobject)

### Functions

- [getIDFMap](idf.md#getidfmap)
- [getTFIDF](idf.md#gettfidf)
- [newIDFMap](idf.md#newidfmap)
- [readIDFMap](idf.md#readidfmap)
- [simhashIDF](idf.md#simhashidf)
- [tokenIdHash](idf.md#tokenidhash)
- [writeIDFMap](idf.md#writeidfmap)

## Variables

### mapObject

• `Const` **mapObject**: *any*

Defined in: [src/idf.ts:6](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L6)

## Functions

### getIDFMap

▸ **getIDFMap**(`engine`: [*DocumentDatabase*](../interfaces/types.documentdatabase.md)): [*IDFMap*](../interfaces/types.idfmap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `engine` | [*DocumentDatabase*](../interfaces/types.documentdatabase.md) |

**Returns:** [*IDFMap*](../interfaces/types.idfmap.md)

Defined in: [src/idf.ts:56](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L56)

___

### getTFIDF

▸ **getTFIDF**(`text`: *string*, `idf`: [*IDFMap*](../interfaces/types.idfmap.md)): *Record*<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | *string* |
| `idf` | [*IDFMap*](../interfaces/types.idfmap.md) |

**Returns:** *Record*<string, number\>

Defined in: [src/idf.ts:75](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L75)

___

### newIDFMap

▸ **newIDFMap**<X\>(`arr`: X[], `getText`: (`x`: X) => *string*, `config`: *Record*<string, any\>): [*IDFMap*](../interfaces/types.idfmap.md)

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | X[] |
| `getText` | (`x`: X) => *string* |
| `config` | *Record*<string, any\> |

**Returns:** [*IDFMap*](../interfaces/types.idfmap.md)

Defined in: [src/idf.ts:19](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L19)

___

### readIDFMap

▸ **readIDFMap**(`fs`: FileSystem, `path`: *string*): *Promise*<[*IDFMap*](../interfaces/types.idfmap.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | FileSystem |
| `path` | *string* |

**Returns:** *Promise*<[*IDFMap*](../interfaces/types.idfmap.md)\>

Defined in: [src/idf.ts:11](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L11)

___

### simhashIDF

▸ **simhashIDF**(`tfidf`: *Record*<string, number\>, `bits?`: *number*, `hashFunc?`: (`x`: *string*, `size`: *number*) => *any*): *bigint*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tfidf` | *Record*<string, number\> | - |
| `bits` | *number* | 64 |
| `hashFunc` | (`x`: *string*, `size`: *number*) => *any* | - |

**Returns:** *bigint*

Defined in: [src/idf.ts:98](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L98)

___

### tokenIdHash

▸ `Const` **tokenIdHash**(`idf`: [*IDFMap*](../interfaces/types.idfmap.md)): *function*

#### Parameters

| Name | Type |
| :------ | :------ |
| `idf` | [*IDFMap*](../interfaces/types.idfmap.md) |

**Returns:** (`x`: *string*, `size`: *number*) => *any*

Defined in: [src/idf.ts:8](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L8)

___

### writeIDFMap

▸ **writeIDFMap**(`fs`: FileSystem, `path`: *string*, `idf`: [*IDFMap*](../interfaces/types.idfmap.md)): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | FileSystem |
| `path` | *string* |
| `idf` | [*IDFMap*](../interfaces/types.idfmap.md) |

**Returns:** *Promise*<boolean\>

Defined in: [src/idf.ts:15](https://github.com/wholebuzz/search/blob/master/src/idf.ts#L15)
