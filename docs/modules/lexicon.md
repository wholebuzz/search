[@wholebuzz/search](../README.md) / [Exports](../modules.md) / lexicon

# Module: lexicon

## Table of contents

### Variables

- [mapObject](lexicon.md#mapobject)

### Functions

- [getLexicon](lexicon.md#getlexicon)
- [getTFIDF](lexicon.md#gettfidf)
- [newLexicon](lexicon.md#newlexicon)
- [readLexicon](lexicon.md#readlexicon)
- [simhashIDF](lexicon.md#simhashidf)
- [tokenIdHash](lexicon.md#tokenidhash)
- [writeLexicon](lexicon.md#writelexicon)

## Variables

### mapObject

• `Const` **mapObject**: *any*

Defined in: [src/lexicon.ts:6](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L6)

## Functions

### getLexicon

▸ **getLexicon**(`engine`: [*DocumentDatabase*](../interfaces/types.documentdatabase.md)): [*Lexicon*](../interfaces/types.lexicon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `engine` | [*DocumentDatabase*](../interfaces/types.documentdatabase.md) |

**Returns:** [*Lexicon*](../interfaces/types.lexicon.md)

Defined in: [src/lexicon.ts:52](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L52)

___

### getTFIDF

▸ **getTFIDF**(`text`: *string*, `lexicon`: [*Lexicon*](../interfaces/types.lexicon.md)): *Record*<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | *string* |
| `lexicon` | [*Lexicon*](../interfaces/types.lexicon.md) |

**Returns:** *Record*<string, number\>

Defined in: [src/lexicon.ts:71](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L71)

___

### newLexicon

▸ **newLexicon**<Item\>(`data`: [*TextDataset*](../interfaces/types.textdataset.md)<Item\>, `config`: *Record*<string, any\>): [*Lexicon*](../interfaces/types.lexicon.md)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [*TextDataset*](../interfaces/types.textdataset.md)<Item\> |
| `config` | *Record*<string, any\> |

**Returns:** [*Lexicon*](../interfaces/types.lexicon.md)

Defined in: [src/lexicon.ts:19](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L19)

___

### readLexicon

▸ **readLexicon**(`fs`: FileSystem, `path`: *string*): *Promise*<[*Lexicon*](../interfaces/types.lexicon.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | FileSystem |
| `path` | *string* |

**Returns:** *Promise*<[*Lexicon*](../interfaces/types.lexicon.md)\>

Defined in: [src/lexicon.ts:11](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L11)

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

Defined in: [src/lexicon.ts:96](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L96)

___

### tokenIdHash

▸ `Const` **tokenIdHash**(`lexicon`: [*Lexicon*](../interfaces/types.lexicon.md)): *function*

#### Parameters

| Name | Type |
| :------ | :------ |
| `lexicon` | [*Lexicon*](../interfaces/types.lexicon.md) |

**Returns:** (`x`: *string*, `size`: *number*) => *any*

Defined in: [src/lexicon.ts:8](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L8)

___

### writeLexicon

▸ **writeLexicon**(`fs`: FileSystem, `path`: *string*, `lexicon`: [*Lexicon*](../interfaces/types.lexicon.md)): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | FileSystem |
| `path` | *string* |
| `lexicon` | [*Lexicon*](../interfaces/types.lexicon.md) |

**Returns:** *Promise*<boolean\>

Defined in: [src/lexicon.ts:15](https://github.com/wholebuzz/search/blob/master/src/lexicon.ts#L15)
