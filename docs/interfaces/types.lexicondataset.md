[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / LexiconDataset

# Interface: LexiconDataset<Item\>

[types](../modules/types.md).LexiconDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*TextDataset*](types.textdataset.md)<Item\>

  ↳ **LexiconDataset**

  ↳↳ [*LabeledLexiconDataset*](types.labeledlexicondataset.md)

  ↳↳ [*EmbeddedLabeledLexiconDataset*](types.embeddedlabeledlexicondataset.md)

  ↳↳ [*FingerprintedLabeledLexiconDataset*](types.fingerprintedlabeledlexicondataset.md)

## Table of contents

### Properties

- [getItemText](types.lexicondataset.md#getitemtext)
- [items](types.lexicondataset.md#items)
- [lexicon](types.lexicondataset.md#lexicon)

## Properties

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

Inherited from: [TextDataset](types.textdataset.md).[items](types.textdataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)

___

### lexicon

• **lexicon**: [*Lexicon*](types.lexicon.md)

Defined in: [src/types.ts:128](https://github.com/wholebuzz/search/blob/master/src/types.ts#L128)
