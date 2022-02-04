[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / FingerprintedLabeledDataset

# Interface: FingerprintedLabeledDataset<Item\>

[types](../modules/types.md).FingerprintedLabeledDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*LabeledDataset*](types.labeleddataset.md)<Item\>

  ↳ **FingerprintedLabeledDataset**

  ↳↳ [*FingerprintedLabeledTextDataset*](types.fingerprintedlabeledtextdataset.md)

  ↳↳ [*FingerprintedLabeledLexiconDataset*](types.fingerprintedlabeledlexicondataset.md)

## Table of contents

### Properties

- [getItemDebug](types.fingerprintedlabeleddataset.md#getitemdebug)
- [getItemFingerprint](types.fingerprintedlabeleddataset.md#getitemfingerprint)
- [getItemLabel](types.fingerprintedlabeleddataset.md#getitemlabel)
- [items](types.fingerprintedlabeleddataset.md#items)
- [setItemFingerprint](types.fingerprintedlabeleddataset.md#setitemfingerprint)

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

### getItemFingerprint

• **getItemFingerprint**: [*GetItemFingerprint*](../modules/types.md#getitemfingerprint)<Item\>

Defined in: [src/types.ts:109](https://github.com/wholebuzz/search/blob/master/src/types.ts#L109)

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

### setItemFingerprint

• **setItemFingerprint**: [*SetItemFingerprint*](../modules/types.md#setitemfingerprint)<Item\>

Defined in: [src/types.ts:110](https://github.com/wholebuzz/search/blob/master/src/types.ts#L110)
