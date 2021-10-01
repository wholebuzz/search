[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [posting](../modules/posting.md) / PostingEntryView

# Class: PostingEntryView

[posting](../modules/posting.md).PostingEntryView

## Implements

- [*PostingEntry*](../interfaces/search.postingentry.md)

## Table of contents

### Constructors

- [constructor](posting.postingentryview.md#constructor)

### Properties

- [block](posting.postingentryview.md#block)
- [index](posting.postingentryview.md#index)

### Accessors

- [docid](posting.postingentryview.md#docid)
- [doclen](posting.postingentryview.md#doclen)
- [occurrences](posting.postingentryview.md#occurrences)
- [score](posting.postingentryview.md#score)
- [sections](posting.postingentryview.md#sections)

## Constructors

### constructor

\+ **new PostingEntryView**(`block`: [*PostingEntryBlock*](posting.postingentryblock.md), `index`: *number*): [*PostingEntryView*](posting.postingentryview.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [*PostingEntryBlock*](posting.postingentryblock.md) |
| `index` | *number* |

**Returns:** [*PostingEntryView*](posting.postingentryview.md)

Defined in: posting.ts:558

## Properties

### block

• **block**: [*PostingEntryBlock*](posting.postingentryblock.md)

___

### index

• **index**: *number*

## Accessors

### docid

• get **docid**(): *bigint*

**Returns:** *bigint*

Implementation of: [PostingEntry](../interfaces/search.postingentry.md).[docid](../interfaces/search.postingentry.md#docid)

Defined in: posting.ts:561

___

### doclen

• get **doclen**(): *number*

**Returns:** *number*

Implementation of: [PostingEntry](../interfaces/search.postingentry.md).[doclen](../interfaces/search.postingentry.md#doclen)

Defined in: posting.ts:569

___

### occurrences

• get **occurrences**(): *Int32Array*

**Returns:** *Int32Array*

Implementation of: [PostingEntry](../interfaces/search.postingentry.md).[occurrences](../interfaces/search.postingentry.md#occurrences)

Defined in: posting.ts:582

___

### score

• get **score**(): *number*

**Returns:** *number*

Implementation of: [PostingEntry](../interfaces/search.postingentry.md).[score](../interfaces/search.postingentry.md#score)

Defined in: posting.ts:565

___

### sections

• get **sections**(): *Int32Array*

**Returns:** *Int32Array*

Implementation of: [PostingEntry](../interfaces/search.postingentry.md).[sections](../interfaces/search.postingentry.md#sections)

Defined in: posting.ts:573
