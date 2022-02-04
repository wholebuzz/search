[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / EmbeddedLabeledTextDataset

# Interface: EmbeddedLabeledTextDataset<Item\>

[types](../modules/types.md).EmbeddedLabeledTextDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*TextDataset*](types.textdataset.md)<Item\>

- [*EmbeddedLabeledDataset*](types.embeddedlabeleddataset.md)<Item\>

  ↳ **EmbeddedLabeledTextDataset**

## Table of contents

### Properties

- [getItemDebug](types.embeddedlabeledtextdataset.md#getitemdebug)
- [getItemEmbedding](types.embeddedlabeledtextdataset.md#getitemembedding)
- [getItemLabel](types.embeddedlabeledtextdataset.md#getitemlabel)
- [getItemText](types.embeddedlabeledtextdataset.md#getitemtext)
- [items](types.embeddedlabeledtextdataset.md#items)
- [setItemEmbedding](types.embeddedlabeledtextdataset.md#setitemembedding)

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

Inherited from: [TextDataset](types.textdataset.md).[getItemText](types.textdataset.md#getitemtext)

Defined in: [src/types.ts:114](https://github.com/wholebuzz/search/blob/master/src/types.ts#L114)

___

### items

• **items**: Item[]

Inherited from: [EmbeddedLabeledDataset](types.embeddedlabeleddataset.md).[items](types.embeddedlabeleddataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)

___

### setItemEmbedding

• **setItemEmbedding**: [*SetItemEmbedding*](../modules/types.md#setitemembedding)<Item\>

Inherited from: [EmbeddedLabeledDataset](types.embeddedlabeleddataset.md).[setItemEmbedding](types.embeddedlabeleddataset.md#setitemembedding)

Defined in: [src/types.ts:105](https://github.com/wholebuzz/search/blob/master/src/types.ts#L105)
