import { FileSystem } from '@wholebuzz/fs/lib/fs'
import { readJSON, writeJSON } from '@wholebuzz/fs/lib/json'
import { fnv1aHash, tokenizeForSearch } from './tokens'
import { DocumentDatabase, IDFMap, IdValue } from './types'

export const mapObject = require('map-obj')

export const tokenIdHash = (idf: IDFMap) => (x: string, size: number) =>
  fnv1aHash(String(idf.idf[x].id), size)

export async function readIDFMap(fs: FileSystem, path: string) {
  return (await readJSON(fs, path)) as IDFMap
}

export async function writeIDFMap(fs: FileSystem, path: string, idf: IDFMap) {
  return writeJSON(fs, path, idf)
}

export function newIDFMap<X>(
  arr: X[],
  getText: (x: X) => string,
  config: Record<string, any>
): IDFMap {
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
