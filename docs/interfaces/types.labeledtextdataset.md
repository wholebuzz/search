[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / LabeledTextDataset

# Interface: LabeledTextDataset<Item\>

[types](../modules/types.md).LabeledTextDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*TextDataset*](types.textdataset.md)<Item\>

- [*LabeledDataset*](types.labeleddataset.md)<Item\>

  ↳ **LabeledTextDataset**

## Table of contents

### Properties

- [getItemDebug](types.labeledtextdataset.md#getitemdebug)
- [getItemLabel](types.labeledtextdataset.md#getitemlabel)
- [getItemText](types.labeledtextdataset.md#getitemtext)
- [items](types.labeledtextdataset.md#items)

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

### getItemLabel

• **getItemLabel**: [*GetItemLabel*](../modules/types.md#getitemlabel)<Item\>

Inherited from: [LabeledDataset](types.labeleddataset.md).[getItemLabel](types.labeleddataset.md#getitemlabel)

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

Inherited from: [LabeledDataset](types.labeleddataset.md).[items](types.labeleddataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)
