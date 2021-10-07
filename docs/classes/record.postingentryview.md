[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [record](../modules/record.md) / PostingEntryView

# Class: PostingEntryView

[record](../modules/record.md).PostingEntryView

## Implements

- [*PostingEntry*](../interfaces/types.postingentry.md)

## Table of contents

### Constructors

- [constructor](record.postingentryview.md#constructor)

### Properties

- [block](record.postingentryview.md#block)
- [index](record.postingentryview.md#index)

### Accessors

- [docid](record.postingentryview.md#docid)
- [doclen](record.postingentryview.md#doclen)
- [occurrences](record.postingentryview.md#occurrences)
- [score](record.postingentryview.md#score)
- [sections](record.postingentryview.md#sections)

## Constructors

### constructor

\+ **new PostingEntryView**(`block`: [*PostingEntryBlock*](record.postingentryblock.md), `index`: *number*): [*PostingEntryView*](record.postingentryview.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [*PostingEntryBlock*](record.postingentryblock.md) |
| `index` | *number* |

**Returns:** [*PostingEntryView*](record.postingentryview.md)

Defined in: [src/record.ts:24](https://github.com/wholebuzz/search/blob/master/src/record.ts#L24)

## Properties

### block

• **block**: [*PostingEntryBlock*](record.postingentryblock.md)

___

### index

• **index**: *number*

## Accessors

### docid

• get **docid**(): *bigint*

**Returns:** *bigint*

Implementation of: [PostingEntry](../interfaces/types.postingentry.md).[docid](../interfaces/types.postingentry.md#docid)

Defined in: [src/record.ts:27](https://github.com/wholebuzz/search/blob/master/src/record.ts#L27)

___

### doclen

• get **doclen**(): *number*

**Returns:** *number*

Implementation of: [PostingEntry](../interfaces/types.postingentry.md).[doclen](../interfaces/types.postingentry.md#doclen)

Defined in: [src/record.ts:35](https://github.com/wholebuzz/search/blob/master/src/record.ts#L35)

___

### occurrences

• get **occurrences**(): *Int32Array*

**Returns:** *Int32Array*

Implementation of: [PostingEntry](../interfaces/types.postingentry.md).[occurrences](../interfaces/types.postingentry.md#occurrences)

Defined in: [src/record.ts:48](https://github.com/wholebuzz/search/blob/master/src/record.ts#L48)

___

### score

• get **score**(): *number*

**Returns:** *number*

Implementation of: [PostingEntry](../interfaces/types.postingentry.md).[score](../interfaces/types.postingentry.md#score)

Defined in: [src/record.ts:31](https://github.com/wholebuzz/search/blob/master/src/record.ts#L31)

___

### sections

• get **sections**(): *Int32Array*

**Returns:** *Int32Array*

Implementation of: [PostingEntry](../interfaces/types.postingentry.md).[sections](../interfaces/types.postingentry.md#sections)

Defined in: [src/record.ts:39](https://github.com/wholebuzz/search/blob/master/src/record.ts#L39)
