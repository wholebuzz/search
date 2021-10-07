[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [record](../modules/record.md) / PostingView

# Class: PostingView

[record](../modules/record.md).PostingView

## Implements

- [*Posting*](../interfaces/types.posting.md)

## Table of contents

### Constructors

- [constructor](record.postingview.md#constructor)

### Properties

- [block](record.postingview.md#block)
- [index](record.postingview.md#index)

### Accessors

- [docid](record.postingview.md#docid)
- [doclen](record.postingview.md#doclen)
- [occurrences](record.postingview.md#occurrences)
- [score](record.postingview.md#score)
- [sections](record.postingview.md#sections)

## Constructors

### constructor

\+ **new PostingView**(`block`: [*PostingBlock*](record.postingblock.md), `index`: *number*): [*PostingView*](record.postingview.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [*PostingBlock*](record.postingblock.md) |
| `index` | *number* |

**Returns:** [*PostingView*](record.postingview.md)

Defined in: [src/record.ts:24](https://github.com/wholebuzz/search/blob/master/src/record.ts#L24)

## Properties

### block

• **block**: [*PostingBlock*](record.postingblock.md)

___

### index

• **index**: *number*

## Accessors

### docid

• get **docid**(): *bigint*

**Returns:** *bigint*

Implementation of: [Posting](../interfaces/types.posting.md).[docid](../interfaces/types.posting.md#docid)

Defined in: [src/record.ts:27](https://github.com/wholebuzz/search/blob/master/src/record.ts#L27)

___

### doclen

• get **doclen**(): *number*

**Returns:** *number*

Implementation of: [Posting](../interfaces/types.posting.md).[doclen](../interfaces/types.posting.md#doclen)

Defined in: [src/record.ts:35](https://github.com/wholebuzz/search/blob/master/src/record.ts#L35)

___

### occurrences

• get **occurrences**(): *Int32Array*

**Returns:** *Int32Array*

Implementation of: [Posting](../interfaces/types.posting.md).[occurrences](../interfaces/types.posting.md#occurrences)

Defined in: [src/record.ts:48](https://github.com/wholebuzz/search/blob/master/src/record.ts#L48)

___

### score

• get **score**(): *number*

**Returns:** *number*

Implementation of: [Posting](../interfaces/types.posting.md).[score](../interfaces/types.posting.md#score)

Defined in: [src/record.ts:31](https://github.com/wholebuzz/search/blob/master/src/record.ts#L31)

___

### sections

• get **sections**(): *Int32Array*

**Returns:** *Int32Array*

Implementation of: [Posting](../interfaces/types.posting.md).[sections](../interfaces/types.posting.md#sections)

Defined in: [src/record.ts:39](https://github.com/wholebuzz/search/blob/master/src/record.ts#L39)
