[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / EmbeddedLabeledLexiconDataset

# Interface: EmbeddedLabeledLexiconDataset<Item\>

[types](../modules/types.md).EmbeddedLabeledLexiconDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*LexiconDataset*](types.lexicondataset.md)<Item\>

- [*EmbeddedLabeledDataset*](types.embeddedlabeleddataset.md)<Item\>

  ↳ **EmbeddedLabeledLexiconDataset**

## Table of contents

### Properties

- [getItemDebug](types.embeddedlabeledlexicondataset.md#getitemdebug)
- [getItemEmbedding](types.embeddedlabeledlexicondataset.md#getitemembedding)
- [getItemLabel](types.embeddedlabeledlexicondataset.md#getitemlabel)
- [getItemText](types.embeddedlabeledlexicondataset.md#getitemtext)
- [items](types.embeddedlabeledlexicondataset.md#items)
- [lexicon](types.embeddedlabeledlexicondataset.md#lexicon)
- [setItemEmbedding](types.embeddedlabeledlexicondataset.md#setitemembedding)

## Properties

### getItemDebug

• `Optional` **getItemDebug**: (`item`: Item) => *string*

#### Type declaration

▸ (`item`: Item): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |

**Returns:** *string*

Inherited from: [EmbeddedLabeledDataset](types.embeddedlabeleddataset.md).[getItemDebug](types.embeddedlabeleddataset.md#getitemdebug)

Defined in: [src/types.ts:100](https://github.com/wholebuzz/search/blob/master/src/types.ts#L100)

___

### getItemEmbedding

• **getItemEmbedding**: [*GetItemEmbedding*](../modules/types.md#getitemembedding)<Item\>

Inherited from: [EmbeddedLabeledDataset](types.embeddedlabeleddataset.md).[getItemEmbedding](types.embeddedlabeleddataset.md#getitemembedding)

Defined in: [src/types.ts:104](https://github.com/wholebuzz/search/blob/master/src/types.ts#L104)

___

### getItemLabel

• **getItemLabel**: [*GetItemLabel*](../modules/types.md#getitemlabel)<Item\>

Inherited from: [EmbeddedLabeledDataset](types.embeddedlabeleddataset.md).[getItemLabel](types.embeddedlabeleddataset.md#getitemlabel)

Defined in: [src/types.ts:99](https://github.com/wholebuzz/search/blob/master/src/types.ts#L99)

___

### getItemText

• **getItemText**: (`x`: Item) => *string*

#### Type declaration

▸ (`x`: Item): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | Item |

**Returns:** *string*

Inherited from: [LexiconDataset](types.lexicondataset.md).[getItemText](types.lexicondataset.md#getitemtext)

Defined in: [src/types.ts:114](https://github.com/wholebuzz/search/blob/master/src/types.ts#L114)

___

### items

• **items**: Item[]

Inherited from: [EmbeddedLabeledDataset](types.embeddedlabeleddataset.md).[items](types.embeddedlabeleddataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)

___

### lexicon

• **lexicon**: [*Lexicon*](types.lexicon.md)

Inherited from: [LexiconDataset](types.lexicondataset.md).[lexicon](types.lexicondataset.md#lexicon)

Defined in: [src/types.ts:128](https://github.com/wholebuzz/search/blob/master/src/types.ts#L128)

___

### setItemEmbedding

• **setItemEmbedding**: [*SetItemEmbedding*](../modules/types.md#setitemembedding)<Item\>

Inherited from: [EmbeddedLabeledDataset](types.embeddedlabeleddataset.md).[setItemEmbedding](types.embeddedlabeleddataset.md#setitemembedding)

Defined in: [src/types.ts:105](https://github.com/wholebuzz/search/blob/master/src/types.ts#L105)
