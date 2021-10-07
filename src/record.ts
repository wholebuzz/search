import { FileSystem } from '@wholebuzz/fs/lib/fs'
import { RecordReader } from 'tfrecord-stream/lib/record_reader'
import { RecordWriter } from 'tfrecord-stream/lib/record_writer'
import { PostingEntry } from './types'

export { RecordReader, RecordWriter }

/**
 * Creates a .tfrecord file reader using arbitrary buffers instead of protobuf.
 * @param url The URL of the file.tfbinary to read records from.
 */
export async function createBinaryRecordReader(fileSystem: FileSystem, url: string) {
  return RecordReader.createFromStream((await fileSystem.openReadableFile(url)).finish())
}

/**
 * Creates a .tfrecord file writer using arbitrary buffers instead of protobuf.
 * @param url The URL of the file.tfbinary to read records from.
 */
export async function createBinaryRecordWriter(fileSystem: FileSystem, url: string) {
  return RecordWriter.createFromStream((await fileSystem.openWritableFile(url)).finish())
}

export class PostingEntryView implements PostingEntry {
  constructor(public block: PostingEntryBlock, public index: number) {}

  get docid() {
    return this.block.docIds[this.index]
  }

  get score() {
    return this.block.docScores[this.index]
  }

  get doclen() {
    return this.block.docLengths[this.index]
  }

  get sections() {
    return new Int32Array(
      this.block.sections.buffer,
      this.block.sections.byteOffset +
        this.index * this.block.sectionsLength * Int32Array.BYTES_PER_ELEMENT,
      this.block.sectionsLength
    )
  }

  get occurrences() {
    const start = this.index === 0 ? 0 : this.block.docOccurrencesEnds[this.index - 1]
    const end = this.block.docOccurrencesEnds[this.index]
    return new Int32Array(
      this.block.occurrences.buffer,
      this.block.occurrences.byteOffset + start * Int32Array.BYTES_PER_ELEMENT,
      end - start
    )
  }
}

export class PostingEntryBlock {
  static headerLength = 2

  static createFrom(input: PostingEntry[], term: string) {
    const docIdSize = input.length * BigInt64Array.BYTES_PER_ELEMENT
    const docLenSize = input.length * Float32Array.BYTES_PER_ELEMENT
    const docScoreSize = input.length * Float32Array.BYTES_PER_ELEMENT
    const docOccurrencesSize = input.length * Int32Array.BYTES_PER_ELEMENT
    let sections = 0
    let sectionsLength = 0
    let occurrencesLength = 0
    input.forEach((entry) => {
      if (!sections) sections = entry.sections.length
      if (entry.sections.length !== sections) throw new Error('Expected fixed number of sections')
      sectionsLength += entry.sections.length
      occurrencesLength += entry.occurrences.length
    })
    const buffer = new ArrayBuffer(
      PostingEntryBlock.headerLength * Int32Array.BYTES_PER_ELEMENT +
        docIdSize +
        docLenSize +
        docScoreSize +
        docOccurrencesSize +
        sectionsLength * Int32Array.BYTES_PER_ELEMENT +
        occurrencesLength * Int32Array.BYTES_PER_ELEMENT
    )
    const header = new Int32Array(buffer, 0, PostingEntryBlock.headerLength)
    header[0] = input.length
    header[1] = sections
    // console.log('PostingEntryBlock.createFrom', term, header[0], header[1])
    const ret = new PostingEntryBlock(Buffer.from(buffer), term)
    if (ret.occurrences.length !== occurrencesLength) {
      throw new Error('PostingEntryBlock corrupt')
    }
    let occurrencesEnd = 0
    input.forEach((entry, i) => {
      ret.docIds[i] = entry.docid as bigint
      ret.docScores[i] = entry.score
      ret.docLengths[i] = entry.doclen
      for (let j = 0; j < sections; j++) ret.sections[i * sections + j] = entry.sections[j]
      for (let j = 0; j < entry.occurrences.length; j++) {
        ret.occurrences[occurrencesEnd + j] = entry.occurrences[j]
      }
      occurrencesEnd += entry.occurrences.length
      ret.docOccurrencesEnds[i] = occurrencesEnd
    })
    return ret
  }

  length: number
  sectionsLength: number
  docIds: BigInt64Array
  docScores: Float32Array
  docLengths: Float32Array
  docOccurrencesEnds: Int32Array
  sections: Int32Array
  occurrences: Int32Array
  data: PostingEntryView[]

  constructor(public buffer: Buffer, _term: string) {
    /* console.log(
      'PostingEntryBlock buffer',
      [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('')
    ) */
    let offset = buffer.byteOffset
    const header = new Int32Array(buffer.buffer, offset, PostingEntryBlock.headerLength)
    offset += PostingEntryBlock.headerLength * Int32Array.BYTES_PER_ELEMENT
    this.length = header[0]
    this.sectionsLength = header[1]
    // console.log('PostingEntryBlock', _term, header[0], header[1])
    this.docIds = new BigInt64Array(buffer.buffer, offset, this.length)
    offset += this.length * BigInt64Array.BYTES_PER_ELEMENT
    this.docScores = new Float32Array(buffer.buffer, offset, this.length)
    offset += this.length * Float32Array.BYTES_PER_ELEMENT
    this.docLengths = new Float32Array(buffer.buffer, offset, this.length)
    offset += this.length * Float32Array.BYTES_PER_ELEMENT
    this.docOccurrencesEnds = new Int32Array(buffer.buffer, offset, this.length)
    offset += this.length * Int32Array.BYTES_PER_ELEMENT
    this.sections = new Int32Array(buffer.buffer, offset, this.length * this.sectionsLength)
    offset += this.length * this.sectionsLength * Int32Array.BYTES_PER_ELEMENT
    this.occurrences = new Int32Array(
      buffer.buffer,
      offset,
      (buffer.byteLength + buffer.byteOffset - offset) / Int32Array.BYTES_PER_ELEMENT
    )
    this.data = Array.from({ length: this.length }, (_, i) => new PostingEntryView(this, i))
  }
}
