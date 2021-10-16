[@wholebuzz/search](../README.md) / [Exports](../modules.md) / types

# Module: types

## Table of contents

### Interfaces

- [Dataset](../interfaces/types.dataset.md)
- [DocIdDatabase](../interfaces/types.dociddatabase.md)
- [DocStats](../interfaces/types.docstats.md)
- [Document](../interfaces/types.document.md)
- [DocumentDatabase](../interfaces/types.documentdatabase.md)
- [EmbeddedLabeledDataset](../interfaces/types.embeddedlabeleddataset.md)
- [FingerprintedLabeledDataset](../interfaces/types.fingerprintedlabeleddataset.md)
- [HasDocId](../interfaces/types.hasdocid.md)
- [HasEmbedding](../interfaces/types.hasembedding.md)
- [HasFingerprint](../interfaces/types.hasfingerprint.md)
- [HasScore](../interfaces/types.hasscore.md)
- [IdValue](../interfaces/types.idvalue.md)
- [LabeledDataset](../interfaces/types.labeleddataset.md)
- [LabeledLexiconDataset](../interfaces/types.labeledlexicondataset.md)
- [LabeledTextDataset](../interfaces/types.labeledtextdataset.md)
- [Lexicon](../interfaces/types.lexicon.md)
- [LexiconDataset](../interfaces/types.lexicondataset.md)
- [Posting](../interfaces/types.posting.md)
- [PostingList](../interfaces/types.postinglist.md)
- [PostingListDatabase](../interfaces/types.postinglistdatabase.md)
- [SearchInterface](../interfaces/types.searchinterface.md)
- [TextDataset](../interfaces/types.textdataset.md)

### Type aliases

- [GetItemEmbedding](types.md#getitemembedding)
- [GetItemFingerprint](types.md#getitemfingerprint)
- [GetItemLabel](types.md#getitemlabel)
- [ItemEmbedding](types.md#itemembedding)
- [ItemFingerprint](types.md#itemfingerprint)
- [ItemLabel](types.md#itemlabel)
- [SetItemEmbedding](types.md#setitemembedding)
- [SetItemFingerprint](types.md#setitemfingerprint)

## Type aliases

### GetItemEmbedding

Ƭ **GetItemEmbedding**<Item\>: (`item`: Item) => [*ItemEmbedding*](types.md#itemembedding)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Type declaration

▸ (`item`: Item): [*ItemEmbedding*](types.md#itemembedding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |

**Returns:** [*ItemEmbedding*](types.md#itemembedding)

Defined in: [src/types.ts:5](https://github.com/wholebuzz/search/blob/master/src/types.ts#L5)

___

### GetItemFingerprint

Ƭ **GetItemFingerprint**<Item\>: (`item`: Item) => [*ItemFingerprint*](types.md#itemfingerprint)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Type declaration

▸ (`item`: Item): [*ItemFingerprint*](types.md#itemfingerprint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |

**Returns:** [*ItemFingerprint*](types.md#itemfingerprint)

Defined in: [src/types.ts:7](https://github.com/wholebuzz/search/blob/master/src/types.ts#L7)

___

### GetItemLabel

Ƭ **GetItemLabel**<Item\>: (`item`: Item) => [*ItemLabel*](types.md#itemlabel)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Type declaration

▸ (`item`: Item): [*ItemLabel*](types.md#itemlabel)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |

**Returns:** [*ItemLabel*](types.md#itemlabel)

Defined in: [src/types.ts:4](https://github.com/wholebuzz/search/blob/master/src/types.ts#L4)

___

### ItemEmbedding

Ƭ **ItemEmbedding**: *number*[]

Defined in: [src/types.ts:2](https://github.com/wholebuzz/search/blob/master/src/types.ts#L2)

___

### ItemFingerprint

Ƭ **ItemFingerprint**: *bigint*

Defined in: [src/types.ts:3](https://github.com/wholebuzz/search/blob/master/src/types.ts#L3)

___

### ItemLabel

Ƭ **ItemLabel**: *string*

Defined in: [src/types.ts:1](https://github.com/wholebuzz/search/blob/master/src/types.ts#L1)

___

### SetItemEmbedding

Ƭ **SetItemEmbedding**<Item\>: (`item`: Item, `embedding?`: [*ItemEmbedding*](types.md#itemembedding)) => Item

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Type declaration

▸ (`item`: Item, `embedding?`: [*ItemEmbedding*](types.md#itemembedding)): Item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |
| `embedding?` | [*ItemEmbedding*](types.md#itemembedding) |

**Returns:** Item

Defined in: [src/types.ts:6](https://github.com/wholebuzz/search/blob/master/src/types.ts#L6)

___

### SetItemFingerprint

Ƭ **SetItemFingerprint**<Item\>: (`item`: Item, `fingerprint?`: [*ItemFingerprint*](types.md#itemfingerprint)) => Item

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Type declaration

▸ (`item`: Item, `fingerprint?`: [*ItemFingerprint*](types.md#itemfingerprint)): Item

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |
| `fingerprint?` | [*ItemFingerprint*](types.md#itemfingerprint) |

**Returns:** Item

Defined in: [src/types.ts:8](https://github.com/wholebuzz/search/blob/master/src/types.ts#L8)
