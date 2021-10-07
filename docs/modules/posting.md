[@wholebuzz/search](../README.md) / [Exports](../modules.md) / posting

# Module: posting

## Table of contents

### Classes

- [MemoryPostingListDatabase](../classes/posting.memorypostinglistdatabase.md)

### Variables

- [intersect](posting.md#intersect)
- [merge](posting.md#merge)
- [sorted](posting.md#sorted)

### Functions

- [addPostingEntryScores](posting.md#addpostingentryscores)
- [calcProximityEntryScores](posting.md#calcproximityentryscores)

## Variables

### intersect

• `Const` **intersect**: *any*

Defined in: [src/posting.ts:14](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L14)

___

### merge

• `Const` **merge**: *any*

Defined in: [src/posting.ts:15](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L15)

___

### sorted

• `Const` **sorted**: *any*

Defined in: [src/posting.ts:16](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L16)

## Functions

### addPostingEntryScores

▸ **addPostingEntryScores**(`entryA`: [*PostingEntry*](../interfaces/types.postingentry.md), `entryB`: [*PostingEntry*](../interfaces/types.postingentry.md), `modify?`: *boolean*): [*PostingEntry*](../interfaces/types.postingentry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entryA` | [*PostingEntry*](../interfaces/types.postingentry.md) | - |
| `entryB` | [*PostingEntry*](../interfaces/types.postingentry.md) | - |
| `modify` | *boolean* | false |

**Returns:** [*PostingEntry*](../interfaces/types.postingentry.md)

Defined in: [src/posting.ts:220](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L220)

___

### calcProximityEntryScores

▸ **calcProximityEntryScores**(`entryA`: [*PostingEntry*](../interfaces/types.postingentry.md), `entryB`: [*PostingEntry*](../interfaces/types.postingentry.md), `modify?`: *boolean*): [*PostingEntry*](../interfaces/types.postingentry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entryA` | [*PostingEntry*](../interfaces/types.postingentry.md) | - |
| `entryB` | [*PostingEntry*](../interfaces/types.postingentry.md) | - |
| `modify` | *boolean* | false |

**Returns:** [*PostingEntry*](../interfaces/types.postingentry.md)

Defined in: [src/posting.ts:230](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L230)
