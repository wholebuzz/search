[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [docids](../modules/docids.md) / LevelDocIdDatabase

# Class: LevelDocIdDatabase

[docids](../modules/docids.md).LevelDocIdDatabase

## Hierarchy

- [*DocIdDatabase*](types.dociddatabase.md)

  ↳ **LevelDocIdDatabase**

## Table of contents

### Constructors

- [constructor](docids.leveldociddatabase.md#constructor)

### Properties

- [db](docids.leveldociddatabase.md#db)
- [docmap](docids.leveldociddatabase.md#docmap)
- [idmap](docids.leveldociddatabase.md#idmap)
- [nextDocId](docids.leveldociddatabase.md#nextdocid)
- [path](docids.leveldociddatabase.md#path)

### Methods

- [add](docids.leveldociddatabase.md#add)
- [close](docids.leveldociddatabase.md#close)
- [get](docids.leveldociddatabase.md#get)
- [remove](docids.leveldociddatabase.md#remove)
- [resolve](docids.leveldociddatabase.md#resolve)

## Constructors

### constructor

\+ **new LevelDocIdDatabase**(`path`: *string*): [*LevelDocIdDatabase*](docids.leveldociddatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** [*LevelDocIdDatabase*](docids.leveldociddatabase.md)

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:51](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L51)

## Properties

### db

• **db**: *LevelDB*<any, any\>

Defined in: [src/docids.ts:49](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L49)

___

### docmap

• **docmap**: *LevelUp*<AbstractLevelDOWN<any, any\>, AbstractIterator<any, any\>\>

Defined in: [src/docids.ts:50](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L50)

___

### idmap

• **idmap**: *LevelUp*<AbstractLevelDOWN<any, any\>, AbstractIterator<any, any\>\>

Defined in: [src/docids.ts:51](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L51)

___

### nextDocId

• **nextDocId**: *bigint*

Defined in: [src/docids.ts:48](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L48)

___

### path

• **path**: *string*

## Methods

### add

▸ **add**(`key`: *string*, `value`: [*DocStats*](../interfaces/types.docstats.md)): *Promise*<bigint\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |
| `value` | [*DocStats*](../interfaces/types.docstats.md) |

**Returns:** *Promise*<bigint\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:74](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L74)

___

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:60](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L60)

___

### get

▸ **get**(`docId`: *bigint*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | *bigint* |

**Returns:** *Promise*<any\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:66](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L66)

___

### remove

▸ **remove**(`key`: *string*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Promise*<any\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:83](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L83)

___

### resolve

▸ **resolve**<I, O\>(`query`: I[], `getter`: (`x`: I) => *bigint*, `putter`: (`x`: I, `y`: [*DocStats*](../interfaces/types.docstats.md)) => O): *Promise*<O[]\>

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | I[] |
| `getter` | (`x`: I) => *bigint* |
| `putter` | (`x`: I, `y`: [*DocStats*](../interfaces/types.docstats.md)) => O |

**Returns:** *Promise*<O[]\>

Overrides: [DocIdDatabase](types.dociddatabase.md)

Defined in: [src/docids.ts:94](https://github.com/wholebuzz/search/blob/master/src/docids.ts#L94)
