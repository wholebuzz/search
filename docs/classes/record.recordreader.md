[@wholebuzz/search](../README.md) / [Exports](../modules.md) / [record](../modules/record.md) / RecordReader

# Class: RecordReader

[record](../modules/record.md).RecordReader

## Table of contents

### Methods

- [close](record.recordreader.md#close)
- [readRecord](record.recordreader.md#readrecord)
- [create](record.recordreader.md#create)
- [createFromStream](record.recordreader.md#createfromstream)

## Methods

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: node_modules/tfrecord-stream/lib/record_reader.d.ts:8

___

### readRecord

▸ **readRecord**(): *Promise*<``null`` \| Uint8Array\>

**Returns:** *Promise*<``null`` \| Uint8Array\>

Defined in: node_modules/tfrecord-stream/lib/record_reader.d.ts:7

___

### create

▸ `Static` **create**(`filePath`: PathLike): *Promise*<[*RecordReader*](record.recordreader.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | PathLike |

**Returns:** *Promise*<[*RecordReader*](record.recordreader.md)\>

Defined in: node_modules/tfrecord-stream/lib/record_reader.d.ts:5

___

### createFromStream

▸ `Static` **createFromStream**(`stream`: *Readable*): *Promise*<[*RecordReader*](record.recordreader.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | *Readable* |

**Returns:** *Promise*<[*RecordReader*](record.recordreader.md)\>

Defined in: node_modules/tfrecord-stream/lib/record_reader.d.ts:6
