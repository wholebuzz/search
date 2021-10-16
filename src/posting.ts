import { compareDocId } from './heap'
import { mapObject } from './lexicon'
import { tokenizeForSearch } from './tokens'
import {
  DocIdDatabase,
  Document,
  IdValue,
  Lexicon,
  Posting,
  PostingList,
  PostingListDatabase,
} from './types'

export const intersect = require('@wholebuzz/binary-merge/intersect')
export const merge = require('@wholebuzz/binary-merge/merge2')
export const sorted = require('sorted-array-functions')

export class MemoryPostingListDatabase implements PostingListDatabase {
  db: Record<string, PostingList> = {}
  docids?: DocIdDatabase
  lexicon: Lexicon
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
    for (const [_term, posting] of Object.entries(this.db)) {
      await this.consolidateIndex(posting)
    }
    return true
  }

  async consolidateIndex(index: PostingList) {
    // console.log('consolidateIndex', index.term)
    const { k } = this.lexicon.config.bm25Params
    const n = index.data.length + (index.fileEntries ?? 0)
    const v = (index.value = Math.log((this.lexicon.totalDocs - n + 0.5) / (n + 0.5) + k))
    if (v < this.lexicon.minIDF) this.lexicon.minIDF = v
    for (const posting of index.data) this.scorePosting(posting, index.value)
  }

  scorePosting(posting: Posting, idf: number) {
    const { b, k1 } = this.lexicon.config.bm25Params
    const freq = this.getFreq(posting.occurrences, posting.sections)
    const normalizationFactor = 1 - b + b * (posting.doclen / this.lexicon.avgCorpusLength)
    posting.score = Math.abs((freq * (k1 + 1)) / (k1 * normalizationFactor + freq)) * idf
    if (this.lexicon.config.freqPrecision) {
      posting.score =
        Math.sign(freq) * parseFloat(posting.score.toFixed(this.lexicon.config.freqPrecision))
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
        const posting = { docid: id, doclen, occurrences: uniqueTokens[term], score: 0, sections }
        if (this.lexicon.avgCorpusLength) this.scorePosting(posting, pl.value)
        sorted.add(pl.data, posting, compareDocId)
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

  async intersect(plA: PostingList, plB?: PostingList): Promise<Posting[]> {
    return plB ? this.intersectNext(plA.data, plB) : plA.data
  }

  async intersectNext(dataA: Posting[], plB: PostingList, modify = false): Promise<Posting[]> {
    return intersect(dataA, plB.data, compareDocId, (x: Posting, y: Posting) =>
      addPostingScores(x, y, modify)
    )
  }
}

export function addPostingScores(postingA: Posting, postingB: Posting, modify = false): Posting {
  if (!modify) return { docid: postingA.docid, score: postingA.score + postingB.score } as any
  postingA.score += postingB.score
  return postingA
}

export function calcProximityPostingScores(postingA: Posting, postingB: Posting, modify = false) {
  let proximityPenalty = Number.MAX_SAFE_INTEGER
  merge(postingA.occurrences, postingB.occurrences, (x: number, y: number) => {
    proximityPenalty = Math.min(proximityPenalty, Math.abs(x - y))
    return x - y
  })

  if (!modify) {
    return {
      docid: postingA.docid,
      doclen: postingA.doclen,
      sections: postingA.sections,
      score: (postingA.score + postingB.score) / proximityPenalty,
      occurrences: Array.from(postingB.occurrences),
    }
  }
  postingA.score += postingB.score / proximityPenalty
  postingA.occurrences = postingB.occurrences
  return postingA
}
