import { compareDocId } from './heap'
import { mapObject } from './idf'
import { tokenizeForSearch } from './tokens'
import {
  DocIdDatabase,
  Document,
  IDFMap,
  IdValue,
  PostingEntry,
  PostingList,
  PostingListDatabase,
} from './types'

export const intersect = require('@wholebuzz/binary-merge/intersect')
export const merge = require('@wholebuzz/binary-merge/merge2')
export const sorted = require('sorted-array-functions')

export class MemoryPostingListDatabase implements PostingListDatabase {
  db: Record<string, PostingList> = {}
  docids?: DocIdDatabase
  lexicon: IDFMap
  prepTasks = tokenizeForSearch
  sections: string[] = []
  sectionWeights: number[] = []
  termId = 0

  constructor(public config: Record<string, any>) {
    this.lexicon = {
      config: { ...config },
      idf: this.db,
      minIDF: 0,
      avgCorpusLength: 0,
      totalCorpusLength: 0,
      totalDocs: 0,
    }
    this.defineConfig(this.lexicon.config)
  }

  async init() {
    /* for override */
  }

  async shutdown() {
    await this.docids?.close()
  }

  defineConfig(config: Record<string, any>): boolean {
    this.lexicon.config = config
    this.sections = Object.keys(this.lexicon.config.fldWeights)
    this.sectionWeights = Object.values(this.lexicon.config.fldWeights)
    return true
  }

  // tslint:disable-next-line
  definePrepTasks(tasks: Function[], _field?: string): number {
    this.prepTasks = tasks
    return this.prepTasks.length
  }

  async consolidate(_precision?: number): Promise<boolean> {
    this.lexicon.minIDF = Number.MAX_SAFE_INTEGER
    this.lexicon.avgCorpusLength = this.lexicon.totalCorpusLength / this.lexicon.totalDocs
    for (const [_term, entry] of Object.entries(this.db)) {
      await this.consolidateIndex(entry)
    }
    return true
  }

  async consolidateIndex(index: PostingList) {
    // console.log('consolidateIndex', index.term)
    const { k } = this.lexicon.config.bm25Params
    const n = index.data.length + (index.fileEntries ?? 0)
    const v = (index.value = Math.log((this.lexicon.totalDocs - n + 0.5) / (n + 0.5) + k))
    if (v < this.lexicon.minIDF) this.lexicon.minIDF = v
    for (const entry of index.data) this.scoreEntry(entry, index.value)
  }

  scoreEntry(entry: PostingEntry, idf: number) {
    const { b, k1 } = this.lexicon.config.bm25Params
    const freq = this.getFreq(entry.occurrences, entry.sections)
    const normalizationFactor = 1 - b + b * (entry.doclen / this.lexicon.avgCorpusLength)
    entry.score = Math.abs((freq * (k1 + 1)) / (k1 * normalizationFactor + freq)) * idf
    if (this.lexicon.config.freqPrecision) {
      entry.score =
        Math.sign(freq) * parseFloat(entry.score.toFixed(this.lexicon.config.freqPrecision))
    }
  }

  onNewPostingListData(_pl: PostingList) {
    /* for override */
  }

  async docName(id: string | bigint): Promise<string> {
    return (
      (this.docids && typeof id === 'bigint' && (await this.docids.get(id))?.guid) || id.toString()
    )
  }

  parseDoc(
    doc: Record<string, string>,
    sections: number[],
    uniqueTokens: Record<string, number[]>
  ) {
    let doclen = 0
    let sectionlen = 0
    this.sections.forEach((section, sectionIndex) => {
      let tokens: any = doc[section]
      if (!tokens) {
        sections.push(sectionlen)
        return
      }
      this.prepTasks.forEach((tf) => (tokens = tf(tokens)))
      tokens.forEach((t: string, i: number) =>
        (uniqueTokens[t] ?? (uniqueTokens[t] = [])).push(doclen + i)
      )
      doclen += tokens.length * this.sectionWeights[sectionIndex]
      sectionlen += tokens.length
      sections.push(sectionlen)
    })
    return doclen
  }

  async addDoc(doc: Record<string, string>, id: string | bigint, _version?: Date): Promise<number> {
    try {
      const sections: number[] = []
      const uniqueTokens: Record<string, number[]> = {}
      const doclen = this.parseDoc(doc, sections, uniqueTokens)
      this.lexicon.totalDocs++
      this.lexicon.totalCorpusLength += doclen
      this.lexicon.avgCorpusLength = this.lexicon.totalCorpusLength / this.lexicon.totalDocs
      for (const term of Object.keys(uniqueTokens)) {
        const pl =
          this.db[term] ??
          (this.db[term] = { data: [], id: this.termId++, term, value: this.lexicon.minIDF })
        const emptyPl = pl.data.length === 0
        const entry = { docid: id, doclen, occurrences: uniqueTokens[term], score: 0, sections }
        if (this.lexicon.avgCorpusLength) this.scoreEntry(entry, pl.value)
        sorted.add(pl.data, entry, compareDocId)
        if (emptyPl) this.onNewPostingListData(pl)
      }
    } catch (err) {
      console.log('addDoc', await this.docName(id), err.message)
    }
    return this.lexicon.totalDocs
  }

  async removeDoc(doc: Record<string, string>, id: string | bigint): Promise<number> {
    try {
      const sections: number[] = []
      const uniqueTokens: Record<string, number[]> = {}
      const doclen = this.parseDoc(doc, sections, uniqueTokens)
      Object.keys(uniqueTokens).forEach((term: string) => {
        const pl = this.db[term]
        if (pl) sorted.remove(pl.data, { docid: id }, compareDocId)
      })
      this.lexicon.totalDocs--
      this.lexicon.totalCorpusLength -= doclen
      this.lexicon.avgCorpusLength = this.lexicon.totalCorpusLength / this.lexicon.totalDocs
    } catch (err) {
      console.log('removeDoc', await this.docName(id), err.message)
    }
    return this.lexicon.totalDocs
  }

  getFreq(occurrences: ArrayLike<number>, sections: ArrayLike<number>) {
    let freq = 0
    let currentSection = 0
    // tslint:disable-next-line
    for (let i = 0; i < occurrences.length; i++) {
      const occurrence = occurrences[i]
      while (occurrence >= sections[currentSection] && currentSection < sections.length) {
        currentSection++
      }
      freq += this.sectionWeights[currentSection]
    }
    return freq
  }

  getDocs(): Record<string, Document> {
    return {}
  }

  getTokens(): Record<string, number> {
    return mapObject(this.lexicon.idf, (k: string, v: IdValue) => [k, v.id])
  }

  getIDF(): number[] {
    const ret = new Array(this.lexicon.idf.length) as any[] as number[]
    Object.values(this.lexicon.idf).forEach((v) => (ret[v.id] = v.value))
    return ret
  }

  getConfig(): Record<string, any> {
    return this.lexicon.config
  }

  getTotalCorpusLength(): number {
    return this.lexicon.totalCorpusLength
  }

  getTotalDocs(): number {
    return this.lexicon.totalDocs
  }

  async intersect(plA: PostingList, plB?: PostingList): Promise<PostingEntry[]> {
    return plB ? this.intersectNext(plA.data, plB) : plA.data
  }

  async intersectNext(
    dataA: PostingEntry[],
    plB: PostingList,
    modify = false
  ): Promise<PostingEntry[]> {
    return intersect(dataA, plB.data, compareDocId, (x: PostingEntry, y: PostingEntry) =>
      addPostingEntryScores(x, y, modify)
    )
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
