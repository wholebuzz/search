[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / FingerprintedLabeledLexiconDataset

# Interface: FingerprintedLabeledLexiconDataset<Item\>

[types](../modules/types.md).FingerprintedLabeledLexiconDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*LexiconDataset*](types.lexicondataset.md)<Item\>

- [*FingerprintedLabeledDataset*](types.fingerprintedlabeleddataset.md)<Item\>

  ↳ **FingerprintedLabeledLexiconDataset**

## Table of contents

### Properties

- [getItemDebug](types.fingerprintedlabeledlexicondataset.md#getitemdebug)
- [getItemFingerprint](types.fingerprintedlabeledlexicondataset.md#getitemfingerprint)
- [getItemLabel](types.fingerprintedlabeledlexicondataset.md#getitemlabel)
- [getItemText](types.fingerprintedlabeledlexicondataset.md#getitemtext)
- [items](types.fingerprintedlabeledlexicondataset.md#items)
- [lexicon](types.fingerprintedlabeledlexicondataset.md#lexicon)
- [setItemFingerprint](types.fingerprintedlabeledlexicondataset.md#setitemfingerprint)

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

Inherited from: [FingerprintedLabeledDataset](types.fingerprintedlabeleddataset.md).[getItemDebug](types.fingerprintedlabeleddataset.md#getitemdebug)

Defined in: [src/types.ts:100](https://github.com/wholebuzz/search/blob/master/src/types.ts#L100)

___

### getItemFingerprint

• **getItemFingerprint**: [*GetItemFingerprint*](../modules/types.md#getitemfingerprint)<Item\>

Inherited from: [FingerprintedLabeledDataset](types.fingerprintedlabeleddataset.md).[getItemFingerprint](types.fingerprintedlabeleddataset.md#getitemfingerprint)

Defined in: [src/types.ts:109](https://github.com/wholebuzz/search/blob/master/src/types.ts#L109)

___

### getItemLabel

• **getItemLabel**: [*GetItemLabel*](../modules/types.md#getitemlabel)<Item\>

Inherited from: [FingerprintedLabeledDataset](types.fingerprintedlabeleddataset.md).[getItemLabel](types.fingerprintedlabeleddataset.md#getitemlabel)

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

Inherited from: [FingerprintedLabeledDataset](types.fingerprintedlabeleddataset.md).[items](types.fingerprintedlabeleddataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)

___

### lexicon

• **lexicon**: [*Lexicon*](types.lexicon.md)

Inherited from: [LexiconDataset](types.lexicondataset.md).[lexicon](types.lexicondataset.md#lexicon)

Defined in: [src/types.ts:128](https://github.com/wholebuzz/search/blob/master/src/types.ts#L128)

___

### setItemFingerprint

• **setItemFingerprint**: [*SetItemFingerprint*](../modules/types.md#setitemfingerprint)<Item\>

Inherited from: [FingerprintedLabeledDataset](types.fingerprintedlabeleddataset.md).[setItemFingerprint](types.fingerprintedlabeleddataset.md#setitemfingerprint)

Defined in: [src/types.ts:110](https://github.com/wholebuzz/search/blob/master/src/types.ts#L110)
