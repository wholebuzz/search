[@wholebuzz/search](../README.md) / [Exports](../modules.md) / posting

# Module: posting

## Table of contents

### Classes

- [FilePostingListDatabase](../classes/posting.filepostinglistdatabase.md)
- [MemoryPostingListDatabase](../classes/posting.memorypostinglistdatabase.md)
- [PostingEntryBlock](../classes/posting.postingentryblock.md)
- [PostingEntryView](../classes/posting.postingentryview.md)

### Variables

- [fnv1a](posting.md#fnv1a)
- [intersect](posting.md#intersect)
- [mapObject](posting.md#mapobject)
- [sorted](posting.md#sorted)

### Functions

- [arrayShiftRemove](posting.md#arrayshiftremove)
- [createBinaryRecordReader](posting.md#createbinaryrecordreader)
- [createBinaryRecordWriter](posting.md#createbinaryrecordwriter)
- [genericCompare](posting.md#genericcompare)

## Variables

### fnv1a

• `Const` **fnv1a**: *any*

Defined in: posting.ts:24

___

### intersect

• `Const` **intersect**: *any*

Defined in: posting.ts:25

___

### mapObject

• `Const` **mapObject**: *any*

Defined in: posting.ts:26

___

### sorted

• `Const` **sorted**: *any*

Defined in: posting.ts:27

## Functions

### arrayShiftRemove

▸ **arrayShiftRemove**<X\>(`arr`: X[], `index`: *number*): X

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | X[] |
| `index` | *number* |

**Returns:** X

Defined in: posting.ts:681

___

### createBinaryRecordReader

▸ **createBinaryRecordReader**(`fileSystem`: FileSystem, `url`: *string*): *Promise*<RecordReader\>

Creates a .tfrecord file reader using arbitrary buffers instead of protobuf.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileSystem` | FileSystem | - |
| `url` | *string* | The URL of the file.tfbinary to read records from. |

**Returns:** *Promise*<RecordReader\>

Defined in: posting.ts:696

___

### createBinaryRecordWriter

▸ **createBinaryRecordWriter**(`fileSystem`: FileSystem, `url`: *string*): *Promise*<RecordWriter\>

Creates a .tfrecord file writer using arbitrary buffers instead of protobuf.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileSystem` | FileSystem | - |
| `url` | *string* | The URL of the file.tfbinary to read records from. |

**Returns:** *Promise*<RecordWriter\>

Defined in: posting.ts:704

___

### genericCompare

▸ **genericCompare**<X\>(`a`: X, `b`: X): ``1`` \| ``-1`` \| ``0``

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | X |
| `b` | X |

**Returns:** ``1`` \| ``-1`` \| ``0``

Defined in: posting.ts:688
