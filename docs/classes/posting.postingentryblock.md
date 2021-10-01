[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [posting](../modules/posting.md) / PostingEntryBlock

# Class: PostingEntryBlock

[posting](../modules/posting.md).PostingEntryBlock

## Table of contents

### Constructors

- [constructor](posting.postingentryblock.md#constructor)

### Properties

- [buffer](posting.postingentryblock.md#buffer)
- [data](posting.postingentryblock.md#data)
- [docIds](posting.postingentryblock.md#docids)
- [docLengths](posting.postingentryblock.md#doclengths)
- [docOccurrencesEnds](posting.postingentryblock.md#dococcurrencesends)
- [docScores](posting.postingentryblock.md#docscores)
- [length](posting.postingentryblock.md#length)
- [occurrences](posting.postingentryblock.md#occurrences)
- [sections](posting.postingentryblock.md#sections)
- [sectionsLength](posting.postingentryblock.md#sectionslength)
- [headerLength](posting.postingentryblock.md#headerlength)

### Methods

- [createFrom](posting.postingentryblock.md#createfrom)

## Constructors

### constructor

\+ **new PostingEntryBlock**(`buffer`: *Buffer*, `_term`: *string*): [*PostingEntryBlock*](posting.postingentryblock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | *Buffer* |
| `_term` | *string* |

**Returns:** [*PostingEntryBlock*](posting.postingentryblock.md)

Defined in: posting.ts:526

## Properties

### buffer

• **buffer**: *Buffer*

___

### data

• **data**: [*PostingEntryView*](posting.postingentryview.md)[]

Defined in: posting.ts:526

___

### docIds

• **docIds**: *BigInt64Array*

Defined in: posting.ts:520

___

### docLengths

• **docLengths**: *Float32Array*

Defined in: posting.ts:522

___

### docOccurrencesEnds

• **docOccurrencesEnds**: *Int32Array*

Defined in: posting.ts:523

___

### docScores

• **docScores**: *Float32Array*

Defined in: posting.ts:521

___

### length

• **length**: *number*

Defined in: posting.ts:518

___

### occurrences

• **occurrences**: *Int32Array*

Defined in: posting.ts:525

___

### sections

• **sections**: *Int32Array*

Defined in: posting.ts:524

___

### sectionsLength

• **sectionsLength**: *number*

Defined in: posting.ts:519

___

### headerLength

▪ `Static` **headerLength**: *number*= 2

Defined in: posting.ts:470

## Methods

### createFrom

▸ `Static` **createFrom**(`input`: [*PostingEntry*](../interfaces/search.postingentry.md)[], `term`: *string*): [*PostingEntryBlock*](posting.postingentryblock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*PostingEntry*](../interfaces/search.postingentry.md)[] |
| `term` | *string* |

**Returns:** [*PostingEntryBlock*](posting.postingentryblock.md)

Defined in: posting.ts:472
