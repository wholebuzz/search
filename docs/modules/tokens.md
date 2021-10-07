[@wholebuzz/search](../README.md) / [Exports](../modules.md) / tokens

# Module: tokens

## Table of contents

### Type aliases

- [HashFunction](tokens.md#hashfunction)

### Variables

- [fnv1a](tokens.md#fnv1a)
- [nlp](tokens.md#nlp)
- [tokenizeForHistogram](tokens.md#tokenizeforhistogram)
- [tokenizeForSearch](tokens.md#tokenizeforsearch)

### Functions

- [cleanupText](tokens.md#cleanuptext)
- [fnv1aHash](tokens.md#fnv1ahash)

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

Defined in: [src/tokens.ts:8](https://github.com/wholebuzz/search/blob/master/src/tokens.ts#L8)

## Variables

### fnv1a

• `Const` **fnv1a**: *any*

Defined in: [src/tokens.ts:5](https://github.com/wholebuzz/search/blob/master/src/tokens.ts#L5)

___

### nlp

• `Const` **nlp**: *any*

Defined in: [src/tokens.ts:6](https://github.com/wholebuzz/search/blob/master/src/tokens.ts#L6)

___

### tokenizeForHistogram

• `Const` **tokenizeForHistogram**: *any*[]

Defined in: [src/tokens.ts:12](https://github.com/wholebuzz/search/blob/master/src/tokens.ts#L12)

___

### tokenizeForSearch

• `Const` **tokenizeForSearch**: *any*[]

Defined in: [src/tokens.ts:19](https://github.com/wholebuzz/search/blob/master/src/tokens.ts#L19)

## Functions

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

Defined in: [src/tokens.ts:34](https://github.com/wholebuzz/search/blob/master/src/tokens.ts#L34)

___

### fnv1aHash

▸ `Const` **fnv1aHash**(`x`: *string*, `size`: *number*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *string* |
| `size` | *number* |

**Returns:** *any*

Defined in: [src/tokens.ts:10](https://github.com/wholebuzz/search/blob/master/src/tokens.ts#L10)
