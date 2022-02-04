[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / EmbeddedLabeledDataset

# Interface: EmbeddedLabeledDataset<Item\>

[types](../modules/types.md).EmbeddedLabeledDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*LabeledDataset*](types.labeleddataset.md)<Item\>

  ↳ **EmbeddedLabeledDataset**

  ↳↳ [*EmbeddedLabeledTextDataset*](types.embeddedlabeledtextdataset.md)

  ↳↳ [*EmbeddedLabeledLexiconDataset*](types.embeddedlabeledlexicondataset.md)

## Table of contents

### Properties

- [getItemDebug](types.embeddedlabeleddataset.md#getitemdebug)
- [getItemEmbedding](types.embeddedlabeleddataset.md#getitemembedding)
- [getItemLabel](types.embeddedlabeleddataset.md#getitemlabel)
- [items](types.embeddedlabeleddataset.md#items)
- [setItemEmbedding](types.embeddedlabeleddataset.md#setitemembedding)

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

Inherited from: [LabeledDataset](types.labeleddataset.md).[getItemDebug](types.labeleddataset.md#getitemdebug)

Defined in: [src/types.ts:100](https://github.com/wholebuzz/search/blob/master/src/types.ts#L100)

___

### getItemEmbedding

• **getItemEmbedding**: [*GetItemEmbedding*](../modules/types.md#getitemembedding)<Item\>

Defined in: [src/types.ts:104](https://github.com/wholebuzz/search/blob/master/src/types.ts#L104)

___

### getItemLabel

• **getItemLabel**: [*GetItemLabel*](../modules/types.md#getitemlabel)<Item\>

Inherited from: [LabeledDataset](types.labeleddataset.md).[getItemLabel](types.labeleddataset.md#getitemlabel)

Defined in: [src/types.ts:99](https://github.com/wholebuzz/search/blob/master/src/types.ts#L99)

___

### items

• **items**: Item[]

Inherited from: [LabeledDataset](types.labeleddataset.md).[items](types.labeleddataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)

___

### setItemEmbedding

• **setItemEmbedding**: [*SetItemEmbedding*](../modules/types.md#setitemembedding)<Item\>

Defined in: [src/types.ts:105](https://github.com/wholebuzz/search/blob/master/src/types.ts#L105)
