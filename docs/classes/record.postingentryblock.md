[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [record](../modules/record.md) / PostingEntryBlock

# Class: PostingEntryBlock

[record](../modules/record.md).PostingEntryBlock

## Table of contents

### Constructors

- [constructor](record.postingentryblock.md#constructor)

### Properties

- [buffer](record.postingentryblock.md#buffer)
- [data](record.postingentryblock.md#data)
- [docIds](record.postingentryblock.md#docids)
- [docLengths](record.postingentryblock.md#doclengths)
- [docOccurrencesEnds](record.postingentryblock.md#dococcurrencesends)
- [docScores](record.postingentryblock.md#docscores)
- [length](record.postingentryblock.md#length)
- [occurrences](record.postingentryblock.md#occurrences)
- [sections](record.postingentryblock.md#sections)
- [sectionsLength](record.postingentryblock.md#sectionslength)
- [headerLength](record.postingentryblock.md#headerlength)

### Methods

- [createFrom](record.postingentryblock.md#createfrom)

## Constructors

### constructor

\+ **new PostingEntryBlock**(`buffer`: *Buffer*, `_term`: *string*): [*PostingEntryBlock*](record.postingentryblock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | *Buffer* |
| `_term` | *string* |

**Returns:** [*PostingEntryBlock*](record.postingentryblock.md)

Defined in: [src/record.ts:116](https://github.com/wholebuzz/search/blob/master/src/record.ts#L116)

## Properties

### buffer

• **buffer**: *Buffer*

___

### data

• **data**: [*PostingEntryView*](record.postingentryview.md)[]

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

▸ `Static` **createFrom**(`input`: [*PostingEntry*](../interfaces/types.postingentry.md)[], `term`: *string*): [*PostingEntryBlock*](record.postingentryblock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*PostingEntry*](../interfaces/types.postingentry.md)[] |
| `term` | *string* |

**Returns:** [*PostingEntryBlock*](record.postingentryblock.md)

Defined in: [src/record.ts:62](https://github.com/wholebuzz/search/blob/master/src/record.ts#L62)
