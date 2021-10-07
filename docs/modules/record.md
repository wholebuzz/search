[@wholebuzz/search](../README.md) / [Exports](../modules.md) / record

# Module: record

## Table of contents

### Classes

- [PostingEntryBlock](../classes/record.postingentryblock.md)
- [PostingEntryView](../classes/record.postingentryview.md)
- [RecordReader](../classes/record.recordreader.md)
- [RecordWriter](../classes/record.recordwriter.md)

### Functions

- [createBinaryRecordReader](record.md#createbinaryrecordreader)
- [createBinaryRecordWriter](record.md#createbinaryrecordwriter)

## Functions

### createBinaryRecordReader

▸ **createBinaryRecordReader**(`fileSystem`: FileSystem, `url`: *string*): *Promise*<[*RecordReader*](../classes/record.recordreader.md)\>

Creates a .tfrecord file reader using arbitrary buffers instead of protobuf.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileSystem` | FileSystem | - |
| `url` | *string* | The URL of the file.tfbinary to read records from. |

**Returns:** *Promise*<[*RecordReader*](../classes/record.recordreader.md)\>

Defined in: [src/record.ts:12](https://github.com/wholebuzz/search/blob/master/src/record.ts#L12)

___

### createBinaryRecordWriter

▸ **createBinaryRecordWriter**(`fileSystem`: FileSystem, `url`: *string*): *Promise*<[*RecordWriter*](../classes/record.recordwriter.md)\>

Creates a .tfrecord file writer using arbitrary buffers instead of protobuf.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileSystem` | FileSystem | - |
| `url` | *string* | The URL of the file.tfbinary to read records from. |

**Returns:** *Promise*<[*RecordWriter*](../classes/record.recordwriter.md)\>

Defined in: [src/record.ts:20](https://github.com/wholebuzz/search/blob/master/src/record.ts#L20)
