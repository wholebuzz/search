[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [record](../modules/record.md) / RecordWriter

# Class: RecordWriter

[record](../modules/record.md).RecordWriter

## Table of contents

### Methods

- [close](record.recordwriter.md#close)
- [writeRecord](record.recordwriter.md#writerecord)
- [create](record.recordwriter.md#create)
- [createFromStream](record.recordwriter.md#createfromstream)

## Methods

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: node_modules/tfrecord-stream/lib/record_writer.d.ts:9

___

### writeRecord

▸ **writeRecord**(`record`: *Buffer*): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | *Buffer* |

**Returns:** *Promise*<void\>

Defined in: node_modules/tfrecord-stream/lib/record_writer.d.ts:7

___

### create

▸ `Static` **create**(`filePath`: PathLike): *Promise*<[*RecordWriter*](record.recordwriter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | PathLike |

**Returns:** *Promise*<[*RecordWriter*](record.recordwriter.md)\>

Defined in: node_modules/tfrecord-stream/lib/record_writer.d.ts:5

___

### createFromStream

▸ `Static` **createFromStream**(`stream`: *Writable*): *Promise*<[*RecordWriter*](record.recordwriter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | *Writable* |

**Returns:** *Promise*<[*RecordWriter*](record.recordwriter.md)\>

Defined in: node_modules/tfrecord-stream/lib/record_writer.d.ts:6
