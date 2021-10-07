[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [record](../modules/record.md) / PostingBlock

# Class: PostingBlock

[record](../modules/record.md).PostingBlock

## Table of contents

### Constructors

- [constructor](record.postingblock.md#constructor)

### Properties

- [buffer](record.postingblock.md#buffer)
- [data](record.postingblock.md#data)
- [docIds](record.postingblock.md#docids)
- [docLengths](record.postingblock.md#doclengths)
- [docOccurrencesEnds](record.postingblock.md#dococcurrencesends)
- [docScores](record.postingblock.md#docscores)
- [length](record.postingblock.md#length)
- [occurrences](record.postingblock.md#occurrences)
- [sections](record.postingblock.md#sections)
- [sectionsLength](record.postingblock.md#sectionslength)
- [headerLength](record.postingblock.md#headerlength)

### Methods

- [createFrom](record.postingblock.md#createfrom)

## Constructors

### constructor

\+ **new PostingBlock**(`buffer`: *Buffer*, `_term`: *string*): [*PostingBlock*](record.postingblock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | *Buffer* |
| `_term` | *string* |

**Returns:** [*PostingBlock*](record.postingblock.md)

Defined in: [src/record.ts:116](https://github.com/wholebuzz/search/blob/master/src/record.ts#L116)

## Properties

### buffer

• **buffer**: *Buffer*

___

### data

• **data**: [*PostingView*](record.postingview.md)[]

Defined in: [src/record.ts:116](https://github.com/wholebuzz/search/blob/master/src/record.ts#L116)

___

### docIds

• **docIds**: *BigInt64Array*

Defined in: [src/record.ts:110](https://github.com/wholebuzz/search/blob/master/src/record.ts#L110)

___

### docLengths

• **docLengths**: *Float32Array*

Defined in: [src/record.ts:112](https://github.com/wholebuzz/search/blob/master/src/record.ts#L112)

___

### docOccurrencesEnds

• **docOccurrencesEnds**: *Int32Array*

Defined in: [src/record.ts:113](https://github.com/wholebuzz/search/blob/master/src/record.ts#L113)

___

### docScores

• **docScores**: *Float32Array*

Defined in: [src/record.ts:111](https://github.com/wholebuzz/search/blob/master/src/record.ts#L111)

___

### length

• **length**: *number*

Defined in: [src/record.ts:108](https://github.com/wholebuzz/search/blob/master/src/record.ts#L108)

___

### occurrences

• **occurrences**: *Int32Array*

Defined in: [src/record.ts:115](https://github.com/wholebuzz/search/blob/master/src/record.ts#L115)

___

### sections

• **sections**: *Int32Array*

Defined in: [src/record.ts:114](https://github.com/wholebuzz/search/blob/master/src/record.ts#L114)

___

### sectionsLength

• **sectionsLength**: *number*

Defined in: [src/record.ts:109](https://github.com/wholebuzz/search/blob/master/src/record.ts#L109)

___

### headerLength

▪ `Static` **headerLength**: *number*= 2

Defined in: [src/record.ts:60](https://github.com/wholebuzz/search/blob/master/src/record.ts#L60)

## Methods

### createFrom

▸ `Static` **createFrom**(`input`: [*Posting*](../interfaces/types.posting.md)[], `term`: *string*): [*PostingBlock*](record.postingblock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*Posting*](../interfaces/types.posting.md)[] |
| `term` | *string* |

**Returns:** [*PostingBlock*](record.postingblock.md)

Defined in: [src/record.ts:62](https://github.com/wholebuzz/search/blob/master/src/record.ts#L62)
