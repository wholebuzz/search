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

- [addPostingScores](posting.md#addpostingscores)
- [calcProximityPostingScores](posting.md#calcproximitypostingscores)

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

### addPostingScores

▸ **addPostingScores**(`postingA`: [*Posting*](../interfaces/types.posting.md), `postingB`: [*Posting*](../interfaces/types.posting.md), `modify?`: *boolean*): [*Posting*](../interfaces/types.posting.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `postingA` | [*Posting*](../interfaces/types.posting.md) | - |
| `postingB` | [*Posting*](../interfaces/types.posting.md) | - |
| `modify` | *boolean* | false |

**Returns:** [*Posting*](../interfaces/types.posting.md)

Defined in: [src/posting.ts:216](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L216)

___

### calcProximityPostingScores

▸ **calcProximityPostingScores**(`postingA`: [*Posting*](../interfaces/types.posting.md), `postingB`: [*Posting*](../interfaces/types.posting.md), `modify?`: *boolean*): [*Posting*](../interfaces/types.posting.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `postingA` | [*Posting*](../interfaces/types.posting.md) | - |
| `postingB` | [*Posting*](../interfaces/types.posting.md) | - |
| `modify` | *boolean* | false |

**Returns:** [*Posting*](../interfaces/types.posting.md)

Defined in: [src/posting.ts:222](https://github.com/wholebuzz/search/blob/master/src/posting.ts#L222)
