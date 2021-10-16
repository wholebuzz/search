[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / TextDataset

# Interface: TextDataset<Item\>

[types](../modules/types.md).TextDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*Dataset*](types.dataset.md)<Item\>

  ↳ **TextDataset**

  ↳↳ [*LabeledTextDataset*](types.labeledtextdataset.md)

  ↳↳ [*EmbeddedLabeledTextDataset*](types.embeddedlabeledtextdataset.md)

  ↳↳ [*FingerprintedLabeledTextDataset*](types.fingerprintedlabeledtextdataset.md)

  ↳↳ [*LexiconDataset*](types.lexicondataset.md)

## Table of contents

### Properties

- [getItemText](types.textdataset.md#getitemtext)
- [items](types.textdataset.md#items)

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

Defined in: [src/types.ts:114](https://github.com/wholebuzz/search/blob/master/src/types.ts#L114)

___

### items

• **items**: Item[]

Inherited from: [Dataset](types.dataset.md).[items](types.dataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)
