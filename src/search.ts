import { FileSystem } from '@wholebuzz/fs/lib/fs'
import { readJSON, writeJSON } from '@wholebuzz/fs/lib/json'
import ellipsize from 'ellipsize'
import { decodeHTML as decodeEntities } from 'entities'
import level from 'level'
import { LevelUp } from 'levelup'
import striptags from 'striptags'
import sub from 'subleveldown'

export const fnv1a = require('@sindresorhus/fnv1a')
export const merge = require('@wholebuzz/binary-merge/merge2')
export const mapObject = require('map-obj')
export const nlp = require('wink-nlp-utils')

export interface HasFingerprint {
  fingerprint: bigint
}

export interface HasEmbedding {
  embedding: number[]
}

export interface HasScore {
  score: number
}

export interface Document {
  freq: Record<string, number>
  length: number
}

export interface DocumentDatabase {
  defineConfig(config: Record<string, any>): boolean
  // tslint:disable-next-line
  definePrepTasks(tasks: Function[], field?: string): number
  addDoc(doc: Record<string, string>, id: string | bigint, version?: Date): Promise<number>
  removeDoc(doc: Record<string, string>, id: string | bigint): Promise<number>
  consolidate(precision?: number): Promise<boolean>
  getDocs(): Record<string, Document>
  getTokens(): Record<string, number>
  getIDF(): number[]
  getConfig(): Record<string, any>
  getTotalCorpusLength(): number
  getTotalDocs(): number
}

export interface SearchInterface {
  search(query: string): Promise<Array<[string, number]>>
}

export interface IdValue {
  id: number
  value: number
}

export interface IDFMap {
  config: Record<string, any>
  idf: Record<string, IdValue>
  minIDF: number
  avgCorpusLength: number
  totalCorpusLength: number
  totalDocs: number
  version?: Date
}

export interface DocStats {
  guid: string
  doclen?: number
  sections?: number[]
  archived?: string
}

export abstract class DocumentMap {
  abstract get(docId: bigint): Promise<DocStats | undefined>
  abstract add(key: string, value: DocStats): Promise<bigint>
  abstract remove(key: string): Promise<bigint | null>
  abstract resolve<I, O>(
    query: I[],
    getter: (x: I) => bigint,
    putter: (x: I, y: DocStats) => O
  ): Promise<O[]>
  abstract close(): Promise<void>
}

export interface HasDocId {
  docid: string | bigint
}

export interface PostingEntry extends HasDocId {
  score: number
  doclen: number
  sections: ArrayLike<number>
  occurrences: ArrayLike<number>
}

export interface PostingList extends IdValue {
  term: string
  data: PostingEntry[]
  fileEntries?: number
  fileInode?: number
}

export interface PostingListDatabase extends DocumentDatabase {
  db: Record<string, PostingList>
  lexicon: IDFMap
  docmap?: DocumentMap

  init(): Promise<void>
  shutdown(): Promise<void>
  intersect(x: PostingList, y?: PostingList): Promise<PostingEntry[]>
  intersectNext(x: PostingEntry[], y: PostingList, modifyX: boolean): Promise<PostingEntry[]>
}

export type HashFunction = (x: string, size: number) => bigint

export const searchConfig: Record<string, any> = {
  bm25Params: {
    b: 0.75,
    k: 1,
    k1: 1.2,
  },
  fldWeights: {
    author: 1,
    body: 1,
    title: 2,
  },
  ovFldNames: [],
  scoreTermPair: addPostingEntryScores,
}

export const fnv1aHash = (x: string, size: number) => fnv1a.bigInt(x, { size })
export const tokenIdHash = (idf: IDFMap) => (x: string, size: number) =>
  fnv1aHash(String(idf.idf[x].id), size)

export const tokenizeForHistogram = [
  cleanupText,
  nlp.string.lowerCase,
  nlp.string.tokenize0,
  nlp.tokens.removeWords,
]

export const tokenizeForSearch = [
  cleanupText,
  nlp.string.lowerCase,
  nlp.string.tokenize0,
  nlp.tokens.removeWords,
  nlp.tokens.stem,
  nlp.tokens.propagateNegations,
  (tokens: string[]) => tokens.filter((t: string) => t.length > 1),
]

export async function readIDFMap(fs: FileSystem, path: string) {
  return (await readJSON(fs, path)) as IDFMap
}

export async function writeIDFMap(fs: FileSystem, path: string, idf: IDFMap) {
  return writeJSON(fs, path, idf)
}

export function newIDFMap<X>(arr: X[], getText: (x: X) => string, config = searchConfig): IDFMap {
  const idf: Record<string, IdValue> = {}
  let totalCorpusLength = 0
  let termId = 0
  for (const item of arr) {
    let tokens: any = getText(item)
    tokenizeForSearch.forEach((tf) => (tokens = tf(tokens)))
    const uniqueTokens = new Set()
    tokens.forEach((t: string) => uniqueTokens.add(t))
    uniqueTokens.forEach((t: any) => {
      const term = t as string
      if (!idf[term]) idf[term] = { id: termId++, value: 0 }
      idf[term].value++
    })
    totalCorpusLength += tokens.length
  }
  const { k } = config.bm25Params
  const totalDocs = arr.length
  Object.keys(idf).forEach((t) => {
    const n = idf[t].value
    idf[t].value = Math.log((totalDocs - n + 0.5) / (n + 0.5) + k)
  })

  return {
    config: { ...config, fldWeights: mapObject(config.fldWeights, (key: string) => [key, 1]) },
    idf,
    minIDF: Object.values(idf).reduce((x, y) => (x.value < y.value ? x : y)).value,
    avgCorpusLength: totalCorpusLength / totalDocs,
    totalCorpusLength,
    totalDocs,
  }
}

export function getIDFMap(engine: DocumentDatabase): IDFMap {
  const tokens = engine.getTokens()
  const tokenIDF = engine.getIDF()
  const idf: Record<string, IdValue> = {}
  Object.keys(tokens).forEach((token) => {
    const id = tokens[token]
    idf[token] = { id, value: tokenIDF[id] }
  })
  const ret = {
    config: engine.getConfig(),
    idf,
    minIDF: Object.values(idf).reduce((a, b) => (a.value < b.value ? a : b)).value,
    avgCorpusLength: engine.getTotalCorpusLength() / engine.getTotalDocs(),
    totalCorpusLength: engine.getTotalCorpusLength(),
    totalDocs: engine.getTotalDocs(),
  }
  return ret
}

export function getTFIDF(text: string, idf: IDFMap) {
  const { b, k1 } = idf.config.bm25Params
  let tokens: any = text
  tokenizeForSearch.forEach((tf) => (tokens = tf(tokens)))
  const normalizationFactor = 1 - b + b * (tokens.length / idf.avgCorpusLength)

  const freqs: Record<string, number> = {}
  tokens.forEach((token: string) => (freqs[token] = (freqs[token] || 0) + 1))

  const ret: Record<string, number> = {}
  Object.keys(freqs).forEach((term: string) => {
    const freq = freqs[term]
    const value =
      Math.abs((freq * (k1 + 1)) / (k1 * normalizationFactor + freq)) *
      (idf.idf[term]?.value || idf.minIDF)

    ret[term] =
      Math.sign(freq) *
      (idf.config.freqPrecision ? parseFloat(value.toFixed(idf.config.freqPrecision)) : value)
  })
  return ret
}

/*export function latentSemanticAnalysis(engine: DocumentDatabase) {
  const svd = require('node-svd').svd
  const documents = engine.getDocs()
  const tokens = engine.getTokens()
  const numDocs = Object.keys(documents).length
  const numTokens = Object.keys(tokens).length
  // node-svd can be modified to accept sparse matrix, but that's not even the slow part.
  const A = [...Array(numTokens)].map(() => Array(numDocs).fill(0))
  let docIndex = 0
  for (const docid of Object.keys(documents)) {
    const doc = documents[docid]
    for (const tokenId of Object.keys(doc.freq)) {
      A[parseInt(tokenId, 10)][docIndex] += doc.freq[tokenId]
    }
    docIndex++
  }
  return svd(A)
}*/

export function simhashIDF(tfidf: Record<string, number>, bits = 64, hashFunc = fnv1aHash): bigint {
  let ret = BigInt(0)
  const one = BigInt(1)
  const W = Array(bits).fill(0)
  for (const term of Object.keys(tfidf)) {
    let hash = hashFunc(term, bits)
    let counter = bits - 1
    while (hash > ret) {
      const bit = hash & one
      W[counter] += (bit ? 1 : -1) * tfidf[term]
      hash >>= one
      counter--
    }
  }
  for (let i = 0; i < bits; i++) {
    if (W[i] >= 0) ret++
    if (i < bits - 1) ret <<= one
  }
  return BigInt.asUintN(bits, ret)
}

export class MemoryDocumentMap extends DocumentMap {
  docmap: Map<bigint, DocStats> = new Map()
  idmap: Map<string, bigint> = new Map()
  nextDocId: bigint = BigInt(1)

  async close() {
    /* do nothing */
  }

  async get(docId: bigint) {
    return this.docmap.get(docId)
  }

  async add(key: string, value: DocStats) {
    this.idmap!.set(key, this.nextDocId)
    this.docmap.set(this.nextDocId, value)
    return this.nextDocId++
  }

  async remove(key: string) {
    const docId = this.idmap!.get(key)
    if (!docId) {
      console.log('removeDoc missing', key)
      return null
    } else {
      this.docmap.delete(docId)
      this.idmap!.delete(key)
      return docId
    }
  }

  async resolve<I, O>(query: I[], getter: (x: I) => bigint, putter: (x: I, y: DocStats) => O) {
    const ret: O[] = []
    for (const x of query) {
      const y = this.docmap.get(getter(x))
      if (y) ret.push(putter(x, y))
    }
    return ret
  }
}

export class LevelDocumentMap extends DocumentMap {
  nextDocId: bigint = BigInt(1)
  db: level.LevelDB
  docmap: LevelUp
  idmap: LevelUp

  constructor(public path: string) {
    super()
    this.db = level(path)
    this.docmap = sub(this.db, 'docmap', { valueEncoding: 'json' })
    this.idmap = sub(this.db, 'idmap', { valueEncoding: 'json' })
  }

  async close() {
    await this.docmap.close()
    await this.idmap.close()
    await this.db.close()
  }

  async get(docId: bigint) {
    try {
      return this.docmap.get(docId.toString())
    } catch (_err) {
      return undefined
    }
  }

  async add(key: string, value: DocStats) {
    const docIdValue = this.nextDocId++
    const docId = docIdValue.toString()
    await Promise.all([this.idmap.put(key, { docId }), this.docmap.put(docId, value)]).catch(
      (err) => console.log('LevelDocumentMap.add', err.message)
    )
    return docIdValue
  }

  async remove(key: string) {
    const docId = (await this.idmap.get(key))?.docId
    if (!docId) {
      console.log('removeDoc missing', key)
      return null
    } else {
      await Promise.all([this.docmap.del(docId), this.idmap.del(key)])
      return docId
    }
  }

  async resolve<I, O>(query: I[], getter: (x: I) => bigint, putter: (x: I, y: DocStats) => O) {
    const ret = await Promise.all(query.map(async (x) => putter(x, await this.get(getter(x)))))
    return ret.filter((x) => !!x)
  }
}

export class SearchEngine implements SearchInterface {
  constructor(public posting: PostingListDatabase) {}

  async search(query: string, maxResults?: number, sort = true): Promise<Array<[string, number]>> {
    let tokens: any = query
    tokenizeForSearch.forEach((tf) => (tokens = tf(tokens)))
    const indices = tokens
      .flatMap((token: string) => this.posting.db[token] ?? [])
      .sort(
        (x: PostingList, y: PostingList) =>
          x.data.length + (x.fileEntries ?? 0) - (y.data.length + (y.fileEntries ?? 0))
      )
    if (!indices.length) return []
    // console.log('SearchEngine search', indices)

    let ret = await this.posting.intersect(indices[0], indices.length > 1 ? indices[1] : undefined)
    for (let i = 2; i < indices.length; i++) {
      ret = await this.posting.intersectNext(ret, indices[i].data, true)
    }
    if (sort) ret.sort(compareScore)
    if (maxResults && ret.length >= maxResults) ret = ret.slice(0, maxResults)

    if (!this.posting.docmap) {
      return ret.map((x: PostingEntry): [string, number] => [x.docid.toString(), x.score])
    } else {
      return this.posting.docmap.resolve(
        ret,
        (x: PostingEntry) => x.docid as bigint,
        (x: PostingEntry, y: DocStats): [string, number] => [y.guid, x.score]
      )
    }
  }
}

export function addPostingEntryScores(
  entryA: PostingEntry,
  entryB: PostingEntry,
  modify = false
): PostingEntry {
  if (!modify) return { docid: entryA.docid, score: entryA.score + entryB.score } as any
  entryA.score += entryB.score
  return entryA
}

export function calcProximityEntryScores(
  entryA: PostingEntry,
  entryB: PostingEntry,
  modify = false
) {
  let proximityPenalty = Number.MAX_SAFE_INTEGER
  merge(entryA.occurrences, entryB.occurrences, (x: number, y: number) => {
    proximityPenalty = Math.min(proximityPenalty, Math.abs(x - y))
    return x - y
  })

  if (!modify) {
    return {
      docid: entryA.docid,
      doclen: entryA.doclen,
      sections: entryA.sections,
      score: (entryA.score + entryB.score) / proximityPenalty,
      occurrences: Array.from(entryB.occurrences),
    }
  }
  entryA.score += entryB.score / proximityPenalty
  entryA.occurrences = entryB.occurrences
  return entryA
}

/**
 * Compares the [[`score`]] of two items.
 * @param eventA First instance to compare.
 * @param eventB Second instance to compare.
 */
export const compareScore = (eventA: HasScore, eventB: HasScore) => eventB.score - eventA.score

/**
 * Removes tags, converts entities, and optionally ellipsizes.
 * @param x The string to clean up.
 * @optional maxLength Maximum length.
 */
export function cleanupText(x: string, maxLength?: number) {
  x = decodeEntities(striptags(x))
  if (maxLength) x = ellipsize(x, maxLength)
  return x
}
