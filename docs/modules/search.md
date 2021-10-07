[@wholebuzz/search](../README.md) / [Exports](../modules.md) / search

# Module: search

## Table of contents

### Classes

- [SearchEngine](../classes/search.searchengine.md)

### Variables

- [searchConfig](search.md#searchconfig)

### Functions

- [compareScore](search.md#comparescore)

## Variables

### searchConfig

• `Const` **searchConfig**: *Record*<string, any\>

Defined in: [src/search.ts:12](https://github.com/wholebuzz/search/blob/master/src/search.ts#L12)

## Functions

### compareScore

▸ `Const` **compareScore**(`eventA`: [*HasScore*](../interfaces/types.hasscore.md), `eventB`: [*HasScore*](../interfaces/types.hasscore.md)): *number*

Compares the [[`score`]] of two items.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventA` | [*HasScore*](../interfaces/types.hasscore.md) | First instance to compare. |
| `eventB` | [*HasScore*](../interfaces/types.hasscore.md) | Second instance to compare. |

**Returns:** *number*

Defined in: [src/search.ts:66](https://github.com/wholebuzz/search/blob/master/src/search.ts#L66)
