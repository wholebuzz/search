import { LocalFileSystem } from '@wholebuzz/fs/lib/fs'
import { readJSON } from '@wholebuzz/fs/lib/json'
import * as assert from 'assert'
import _ from 'lodash'
import { FilePostingListDatabase } from './db'
import { getLexicon, getTFIDF, newLexicon, simhashIDF, tokenIdHash } from './lexicon'
import { addPostingScores, MemoryPostingListDatabase } from './posting'
import { searchConfig, SearchEngine } from './search'
import { Event, recreateDirectory, sleep } from './test.fixture'
import { tokenizeForSearch } from './tokens'
import { DocumentDatabase, HasFingerprint } from './types'

it('Should hash the same with Lexicon and SearchEngine', async () => {
  const locale = 'en_US'
  const fingerprintBits = 64
  const memoryPl = new SearchEngine(new MemoryPostingListDatabase(searchConfig))
  const diskDb = new FilePostingListDatabase(
    new LocalFileSystem(),
    await recreateDirectory('/tmp/cluster-test'),
    0,
    searchConfig
  )
  const diskPl = new SearchEngine(diskDb)
  const wink = require('wink-bm25-text-search')()
  const config = {
    bm25Params: { b: 0.75, k: 1, k1: 1.2 },
    fldWeights: { author: 1, body: 1, title: 1 },
    freqPrecision: 4,
    scoreTermPair: addPostingScores,
  }
  memoryPl.posting.defineConfig(config)
  diskPl.posting.defineConfig(config)
  wink.defineConfig(config)
  wink.definePrepTasks(tokenizeForSearch)

  const input = (await readJSON(new LocalFileSystem(), 'test/news.json')) as Event[]
  for (let i = 0; i < input.length; i++) {
    const item = input[i]
    await memoryPl.posting.addDoc({ title: item.props?.title ?? '' }, `${i}`)
    await diskPl.posting.addDoc({ title: item.props?.title ?? '' }, `${i}`)
    wink.addDoc({ author: '', body: '', title: item.props?.title ?? '' }, `${i}`)
  }
  wink.consolidate()
  await memoryPl.posting.consolidate()
  await diskPl.posting.consolidate()
  while (diskDb.flushTrain?.length) await sleep(1000)

  const results = wink.search('antique globes')
  const results2 = await memoryPl.search('antique globes')
  const results3 = await diskPl.search('antique globes')
  assert.deepEqual(results2, results)
  assert.equal(results3.length, results.length)
  for (let i = 0; i < results.length; i++) {
    assert.equal(results3[i][0], results[i][0])
    expect(results3[i][1]).toBeCloseTo(results[i][1])
  }

  const idf = newLexicon({ items: input, getItemText: (x) => x?.props?.title ?? '' }, config)
  const winkIDF = getLexicon(wink)
  winkIDF.config.freqPrecision = config.freqPrecision
  winkIDF.config.scoreTermPair = config.scoreTermPair
  assert.deepEqual(winkIDF, idf)
  for (const [_key, value] of Object.entries(memoryPl.posting.lexicon.idf)) {
    delete (value as any).consolidated
    delete (value as any).data
    delete (value as any).term
  }
  assert.deepEqual(idf, memoryPl.posting.lexicon)

  for (let i = 0; i < 2; i++) {
    const useTokenId = i !== 0
    const fp = await simhashWithSearchEngine(input, wink, fingerprintBits, locale, useTokenId)
    for (const x of fp) {
      assert.equal(
        x.fingerprint,
        simhashIDF(
          getTFIDF(x.props?.title || '', idf),
          fingerprintBits,
          useTokenId ? tokenIdHash(idf) : undefined
        )
      )
      assert.equal(
        x.fingerprint,
        simhashIDF(
          getTFIDF(x.props?.title || '', memoryPl.posting.lexicon),
          fingerprintBits,
          useTokenId ? tokenIdHash(idf) : undefined
        )
      )
    }
  }
})

export async function simhashWithSearchEngine<X>(
  input: X[],
  engine: DocumentDatabase,
  fingerprintBits = 64,
  _locale = 'en_US',
  useTokenId = true
): Promise<Array<X & HasFingerprint>> {
  const docs = engine.getDocs()
  if (useTokenId) {
    return input.map((x, i) => ({
      ...x,
      fingerprint: simhashIDF(docs[i.toString()].freq, fingerprintBits),
    }))
  } else {
    const tokens = engine.getTokens()
    const lexicon = new Array(tokens.length)
    Object.keys(tokens).forEach((term) => (lexicon[tokens[term]] = term))
    return input.map((x, i) => ({
      ...x,
      fingerprint: simhashIDF(
        _.mapKeys(docs[i.toString()].freq, (_v, k) => lexicon[parseInt(k, 10)]),
        fingerprintBits
      ),
    }))
  }
}
