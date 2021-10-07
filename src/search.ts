import { addPostingScores } from './posting'
import { tokenizeForSearch } from './tokens'
import {
  DocStats,
  HasScore,
  Posting,
  PostingList,
  PostingListDatabase,
  SearchInterface,
} from './types'

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
  scoreTermPair: addPostingScores,
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

    if (!this.posting.docids) {
      return ret.map((x: Posting): [string, number] => [x.docid.toString(), x.score])
    } else {
      return this.posting.docids.resolve(
        ret,
        (x: Posting) => x.docid as bigint,
        (x: Posting, y: DocStats): [string, number] => [y.guid, x.score]
      )
    }
  }
}

/**
 * Compares the [[`score`]] of two items.
 * @param eventA First instance to compare.
 * @param eventB Second instance to compare.
 */
export const compareScore = (eventA: HasScore, eventB: HasScore) => eventB.score - eventA.score
