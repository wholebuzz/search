[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [search](../modules/search.md) / SearchEngine

# Class: SearchEngine

[search](../modules/search.md).SearchEngine

## Implements

- [*SearchInterface*](../interfaces/search.searchinterface.md)

## Table of contents

### Constructors

- [constructor](search.searchengine.md#constructor)

### Properties

- [posting](search.searchengine.md#posting)

### Methods

- [search](search.searchengine.md#search)

## Constructors

### constructor

\+ **new SearchEngine**(`posting`: [*PostingListDatabase*](../interfaces/search.postinglistdatabase.md)): [*SearchEngine*](search.searchengine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `posting` | [*PostingListDatabase*](../interfaces/search.postinglistdatabase.md) |

**Returns:** [*SearchEngine*](search.searchengine.md)

Defined in: search.ts:370

## Properties

### posting

• **posting**: [*PostingListDatabase*](../interfaces/search.postinglistdatabase.md)

## Methods

### search

▸ **search**(`query`: *string*, `maxResults?`: *number*, `sort?`: *boolean*): *Promise*<[*string*, *number*][]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | *string* | - |
| `maxResults?` | *number* | - |
| `sort` | *boolean* | true |

**Returns:** *Promise*<[*string*, *number*][]\>

Implementation of: [SearchInterface](../interfaces/search.searchinterface.md)

Defined in: search.ts:373
