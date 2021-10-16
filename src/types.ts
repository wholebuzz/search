export interface HasDocId {
  docid: string | bigint
}

export interface HasEmbedding {
  embedding: number[]
}

export interface HasFingerprint {
  fingerprint: bigint
}

export interface HasScore {
  score: number
}

export interface IdValue {
  id: number
  value: number
}

export interface TextDataset<Item> {
  getItemText: (x: Item) => string
  items: Item[]
}

export interface Posting extends HasDocId {
  score: number
  doclen: number
  sections: ArrayLike<number>
  occurrences: ArrayLike<number>
}

export interface PostingList extends IdValue {
  term: string
  data: Posting[]
  fileEntries?: number
  fileInode?: number
}

export interface Document {
  freq: Record<string, number>
  length: number
}

export interface DocStats {
  guid: string
  doclen?: number
  sections?: number[]
  archived?: string
}

export interface DocIdDatabase {
  get(docId: bigint): Promise<DocStats | undefined>
  add(key: string, value: DocStats): Promise<bigint>
  remove(key: string): Promise<bigint | null>
  resolve<I, O>(
    query: I[],
    getter: (x: I) => bigint,
    putter: (x: I, y: DocStats) => O
  ): Promise<O[]>
  close(): Promise<void>
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

export interface Lexicon {
  config: Record<string, any>
  idf: Record<string, IdValue>
  minIDF: number
  avgCorpusLength: number
  totalCorpusLength: number
  totalDocs: number
  version?: Date
}

export interface PostingListDatabase extends DocumentDatabase {
  db: Record<string, PostingList>
  lexicon: Lexicon
  docids?: DocIdDatabase

  init(): Promise<void>
  shutdown(): Promise<void>
  intersect(x: PostingList, y?: PostingList): Promise<Posting[]>
  intersectNext(x: Posting[], y: PostingList, modifyX: boolean): Promise<Posting[]>
}

export interface SearchInterface {
  search(query: string): Promise<Array<[string, number]>>
}
