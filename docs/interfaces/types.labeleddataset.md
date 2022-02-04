[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / LabeledDataset

# Interface: LabeledDataset<Item\>

[types](../modules/types.md).LabeledDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*Dataset*](types.dataset.md)<Item\>

  ↳ **LabeledDataset**

  ↳↳ [*EmbeddedLabeledDataset*](types.embeddedlabeleddataset.md)

  ↳↳ [*FingerprintedLabeledDataset*](types.fingerprintedlabeleddataset.md)

  ↳↳ [*LabeledTextDataset*](types.labeledtextdataset.md)

  ↳↳ [*LabeledLexiconDataset*](types.labeledlexicondataset.md)

## Table of contents

### Properties

- [getItemDebug](types.labeleddataset.md#getitemdebug)
- [getItemLabel](types.labeleddataset.md#getitemlabel)
- [items](types.labeleddataset.md#items)

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

Defined in: [src/types.ts:100](https://github.com/wholebuzz/search/blob/master/src/types.ts#L100)

___

### getItemLabel

• **getItemLabel**: [*GetItemLabel*](../modules/types.md#getitemlabel)<Item\>

Defined in: [src/types.ts:99](https://github.com/wholebuzz/search/blob/master/src/types.ts#L99)

___

### items

• **items**: Item[]

Inherited from: [Dataset](types.dataset.md).[items](types.dataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)
