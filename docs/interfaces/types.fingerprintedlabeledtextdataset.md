[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / FingerprintedLabeledTextDataset

# Interface: FingerprintedLabeledTextDataset<Item\>

[types](../modules/types.md).FingerprintedLabeledTextDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*TextDataset*](types.textdataset.md)<Item\>

- [*FingerprintedLabeledDataset*](types.fingerprintedlabeleddataset.md)<Item\>

  ↳ **FingerprintedLabeledTextDataset**

## Table of contents

### Properties

- [getItemDebug](types.fingerprintedlabeledtextdataset.md#getitemdebug)
- [getItemFingerprint](types.fingerprintedlabeledtextdataset.md#getitemfingerprint)
- [getItemLabel](types.fingerprintedlabeledtextdataset.md#getitemlabel)
- [getItemText](types.fingerprintedlabeledtextdataset.md#getitemtext)
- [items](types.fingerprintedlabeledtextdataset.md#items)
- [setItemFingerprint](types.fingerprintedlabeledtextdataset.md#setitemfingerprint)

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

Inherited from: [TextDataset](types.textdataset.md).[getItemText](types.textdataset.md#getitemtext)

Defined in: [src/types.ts:114](https://github.com/wholebuzz/search/blob/master/src/types.ts#L114)

___

### items

• **items**: Item[]

Inherited from: [FingerprintedLabeledDataset](types.fingerprintedlabeleddataset.md).[items](types.fingerprintedlabeleddataset.md#items)

Defined in: [src/types.ts:95](https://github.com/wholebuzz/search/blob/master/src/types.ts#L95)

___

### setItemFingerprint

• **setItemFingerprint**: [*SetItemFingerprint*](../modules/types.md#setitemfingerprint)<Item\>

Inherited from: [FingerprintedLabeledDataset](types.fingerprintedlabeleddataset.md).[setItemFingerprint](types.fingerprintedlabeleddataset.md#setitemfingerprint)

Defined in: [src/types.ts:110](https://github.com/wholebuzz/search/blob/master/src/types.ts#L110)
