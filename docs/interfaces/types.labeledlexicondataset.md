[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / LabeledLexiconDataset

# Interface: LabeledLexiconDataset<Item\>

[types](../modules/types.md).LabeledLexiconDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*LexiconDataset*](types.lexicondataset.md)<Item\>

- [*LabeledDataset*](types.labeleddataset.md)<Item\>

  ↳ **LabeledLexiconDataset**

## Table of contents

### Properties

- [getItemDebug](types.labeledlexicondataset.md#getitemdebug)
- [getItemLabel](types.labeledlexicondataset.md#getitemlabel)
- [getItemText](types.labeledlexicondataset.md#getitemtext)
- [items](types.labeledlexicondataset.md#items)
- [lexicon](types.labeledlexicondataset.md#lexicon)

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

Inherited from: [LexiconDataset](types.lexicondataset.md).[getItemText](types.lexicondataset.md#getitemtext)

Defined in: [src/types.ts:114](https://github.com/wholebuzz/search/blob/master/src/types.ts#L114)

___

### items

• **items**: Item[]

Inherited from: [LabeledDataset](types.labeleddataset.md).[items](types.labeleddataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)

___

### lexicon

• **lexicon**: [*Lexicon*](types.lexicon.md)

Inherited from: [LexiconDataset](types.lexicondataset.md).[lexicon](types.lexicondataset.md#lexicon)

Defined in: [src/types.ts:128](https://github.com/wholebuzz/search/blob/master/src/types.ts#L128)
