[@wholebuzz/search](../README.md) / [Exports](../modules.md) / search

# Module: search

## Table of contents

### Classes

- [DocumentMap](../classes/search.documentmap.md)
- [LevelDocumentMap](../classes/search.leveldocumentmap.md)
- [MemoryDocumentMap](../classes/search.memorydocumentmap.md)
- [SearchEngine](../classes/search.searchengine.md)

### Interfaces

- [DocStats](../interfaces/search.docstats.md)
- [Document](../interfaces/search.document.md)
- [DocumentDatabase](../interfaces/search.documentdatabase.md)
- [HasDocId](../interfaces/search.hasdocid.md)
- [HasEmbedding](../interfaces/search.hasembedding.md)
- [HasFingerprint](../interfaces/search.hasfingerprint.md)
- [HasScore](../interfaces/search.hasscore.md)
- [IDFMap](../interfaces/search.idfmap.md)
- [IdValue](../interfaces/search.idvalue.md)
- [PostingEntry](../interfaces/search.postingentry.md)
- [PostingList](../interfaces/search.postinglist.md)
- [PostingListDatabase](../interfaces/search.postinglistdatabase.md)
- [SearchInterface](../interfaces/search.searchinterface.md)

### Type aliases

- [HashFunction](search.md#hashfunction)

### Variables

- [fnv1a](search.md#fnv1a)
- [mapObject](search.md#mapobject)
- [merge](search.md#merge)
- [nlp](search.md#nlp)
- [searchConfig](search.md#searchconfig)
- [tokenizeForHistogram](search.md#tokenizeforhistogram)
- [tokenizeForSearch](search.md#tokenizeforsearch)

### Functions

- [addPostingEntryScores](search.md#addpostingentryscores)
- [calcProximityEntryScores](search.md#calcproximityentryscores)
- [cleanupText](search.md#cleanuptext)
- [compareScore](search.md#comparescore)
- [fnv1aHash](search.md#fnv1ahash)
- [getIDFMap](search.md#getidfmap)
- [getTFIDF](search.md#gettfidf)
- [newIDFMap](search.md#newidfmap)
- [readIDFMap](search.md#readidfmap)
- [simhashIDF](search.md#simhashidf)
- [tokenIdHash](search.md#tokenidhash)
- [writeIDFMap](search.md#writeidfmap)

## Type aliases

### HashFunction

Ƭ **HashFunction**: (`x`: *string*, `size`: *number*) => *bigint*

#### Type declaration

▸ (`x`: *string*, `size`: *number*): *bigint*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *string* |
| `size` | *number* |

**Returns:** *bigint*

Defined in: search.ts:114

## Variables

### fnv1a

• `Const` **fnv1a**: *any*

Defined in: search.ts:10

___

### mapObject

• `Const` **mapObject**: *any*

Defined in: search.ts:11

___

### merge

• `Const` **merge**: *any*

Defined in: search.ts:12

___

### nlp

• `Const` **nlp**: *any*

Defined in: search.ts:13

___

### searchConfig

• `Const` **searchConfig**: *Record*<string, any\>

Defined in: search.ts:116

___

### tokenizeForHistogram

• `Const` **tokenizeForHistogram**: *any*[]

Defined in: search.ts:135

___

### tokenizeForSearch

• `Const` **tokenizeForSearch**: *any*[]

Defined in: search.ts:142

## Functions

### addPostingEntryScores

▸ **addPostingEntryScores**(`entryA`: [*PostingEntry*](../interfaces/search.postingentry.md), `entryB`: [*PostingEntry*](../interfaces/search.postingentry.md), `modify?`: *boolean*): [*PostingEntry*](../interfaces/search.postingentry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entryA` | [*PostingEntry*](../interfaces/search.postingentry.md) | - |
| `entryB` | [*PostingEntry*](../interfaces/search.postingentry.md) | - |
| `modify` | *boolean* | false |

**Returns:** [*PostingEntry*](../interfaces/search.postingentry.md)

Defined in: search.ts:404

___

### calcProximityEntryScores

▸ **calcProximityEntryScores**(`entryA`: [*PostingEntry*](../interfaces/search.postingentry.md), `entryB`: [*PostingEntry*](../interfaces/search.postingentry.md), `modify?`: *boolean*): [*PostingEntry*](../interfaces/search.postingentry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entryA` | [*PostingEntry*](../interfaces/search.postingentry.md) | - |
| `entryB` | [*PostingEntry*](../interfaces/search.postingentry.md) | - |
| `modify` | *boolean* | false |

**Returns:** [*PostingEntry*](../interfaces/search.postingentry.md)

Defined in: search.ts:414

___

### cleanupText

▸ **cleanupText**(`x`: *string*, `maxLength?`: *number*): *string*

Removes tags, converts entities, and optionally ellipsizes.

**`optional`** maxLength Maximum length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | *string* | The string to clean up. |
| `maxLength?` | *number* | - |

**Returns:** *string*

Defined in: search.ts:451

___

### compareScore

▸ `Const` **compareScore**(`eventA`: [*HasScore*](../interfaces/search.hasscore.md), `eventB`: [*HasScore*](../interfaces/search.hasscore.md)): *number*

Compares the [[`score`]] of two items.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventA` | [*HasScore*](../interfaces/search.hasscore.md) | First instance to compare. |
| `eventB` | [*HasScore*](../interfaces/search.hasscore.md) | Second instance to compare. |

**Returns:** *number*

Defined in: search.ts:444

___

### fnv1aHash

▸ `Const` **fnv1aHash**(`x`: *string*, `size`: *number*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *string* |
| `size` | *number* |

**Returns:** *any*

Defined in: search.ts:131

___

### getIDFMap

▸ **getIDFMap**(`engine`: [*DocumentDatabase*](../interfaces/search.documentdatabase.md)): [*IDFMap*](../interfaces/search.idfmap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `engine` | [*DocumentDatabase*](../interfaces/search.documentdatabase.md) |

**Returns:** [*IDFMap*](../interfaces/search.idfmap.md)

Defined in: search.ts:193

___

### getTFIDF

▸ **getTFIDF**(`text`: *string*, `idf`: [*IDFMap*](../interfaces/search.idfmap.md)): *Record*<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | *string* |
| `idf` | [*IDFMap*](../interfaces/search.idfmap.md) |

**Returns:** *Record*<string, number\>

Defined in: search.ts:212

___

### newIDFMap

▸ **newIDFMap**<X\>(`arr`: X[], `getText`: (`x`: X) => *string*, `config?`: *Record*<string, any\>): [*IDFMap*](../interfaces/search.idfmap.md)

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

**Returns:** [*IDFMap*](../interfaces/search.idfmap.md)

Defined in: search.ts:160

___

### readIDFMap

▸ **readIDFMap**(`fs`: FileSystem, `path`: *string*): *Promise*<[*IDFMap*](../interfaces/search.idfmap.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | FileSystem |
| `path` | *string* |

**Returns:** *Promise*<[*IDFMap*](../interfaces/search.idfmap.md)\>

Defined in: search.ts:152

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

Defined in: search.ts:254

___

### tokenIdHash

▸ `Const` **tokenIdHash**(`idf`: [*IDFMap*](../interfaces/search.idfmap.md)): *function*

#### Parameters

| Name | Type |
| :------ | :------ |
| `idf` | [*IDFMap*](../interfaces/search.idfmap.md) |

**Returns:** (`x`: *string*, `size`: *number*) => *any*

Defined in: search.ts:132

___

### writeIDFMap

▸ **writeIDFMap**(`fs`: FileSystem, `path`: *string*, `idf`: [*IDFMap*](../interfaces/search.idfmap.md)): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | FileSystem |
| `path` | *string* |
| `idf` | [*IDFMap*](../interfaces/search.idfmap.md) |

**Returns:** *Promise*<boolean\>

Defined in: search.ts:156
