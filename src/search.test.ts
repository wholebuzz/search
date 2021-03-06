import { readJSON } from '@wholebuzz/fs/lib/json'
import { LocalFileSystem } from '@wholebuzz/fs/lib/local'
import * as assert from 'assert'
import { FilePostingListDatabase } from './db'
import { LevelDocIdDatabase, MemoryDocIdDatabase } from './docids'
import { MemoryPostingListDatabase } from './posting'
import { PostingBlock } from './record'
import { searchConfig, SearchEngine } from './search'
import { Event, recreateDirectory, rmrf } from './test.fixture'
import { DocIdDatabase } from './types'

it('Should maintain DocIdDatabase', async () => {
  const file = '/tmp/testDocIdDatabase.level'
  await rmrf(file)
  for (const implementation of ['memory', 'level']) {
    const db: DocIdDatabase =
      implementation === 'memory' ? new MemoryDocIdDatabase() : new LevelDocIdDatabase(file)
    const docIdVars = (docId: bigint) => {
      const key = `foobar${docId}`
      return { key, value: { guid: key } }
    }

    for (let nextDocId = BigInt(1); nextDocId <= BigInt(100); nextDocId++) {
      const { key, value } = docIdVars(nextDocId)
      assert.equal(nextDocId, await db.add(key, value))
      assert.equal(value.toString(), (await db.get(nextDocId))?.toString())
    }

    for (let nextDocId = BigInt(1); nextDocId <= BigInt(100); nextDocId++) {
      const { key, value } = docIdVars(nextDocId)
      assert.equal(value.toString(), (await db.get(nextDocId))?.toString())
      assert.equal(nextDocId, await db.remove(key))
    }
  }
})

it('Should serialize posting lists correctly', async () => {
  const simple = new SearchEngine(new MemoryPostingListDatabase(searchConfig))
  const input = (await readJSON(new LocalFileSystem(), './test/news.json')) as Event[]
  input.forEach((item: Event, i: number) => {
    simple.posting
      .addDoc({ title: item.props?.title ?? '' }, `${i}`)
      .catch((err) => console.log('addDoc', err))
  })

  for (const term of Object.keys(simple.posting.db)) {
    const orig = simple.posting.db[term].data
    const block = PostingBlock.createFrom(orig, term)
    assert.equal(block.data.length, orig.length)
    for (let i = 0; i < orig.length; i++) {
      assert.equal(block.data[i].docid, orig[i].docid)
      assert.equal(block.data[i].doclen, orig[i].doclen)
      expect(block.data[i].score).toBeCloseTo(orig[i].score)
      assert.equal(block.data[i].sections.length, orig[i].sections.length)
      assert.equal(block.data[i].occurrences.length, orig[i].occurrences.length)
      for (let j = 0; j < orig[i].sections.length; j++) {
        assert.equal(block.data[i].sections[j], orig[i].sections[j])
      }
      for (let j = 0; j < orig[i].occurrences.length; j++) {
        assert.equal(block.data[i].occurrences[j], orig[i].occurrences[j])
      }
    }
  }
})

it('Should reopen same index', async () => {
  const dir = '/tmp/searchTest'
  await rmrf(dir)
  const fs = new LocalFileSystem()
  const input = (await readJSON(fs, './test/news.json')) as Event[]
  let posting = new FilePostingListDatabase(fs, await recreateDirectory(dir), 2, searchConfig)
  await posting.init()
  input.forEach((item: Event, i: number) => {
    posting
      .addDoc({ title: item.props?.title ?? '' }, `${i}`)
      .catch((err) => console.log('addDoc', err))
  })
  await posting.shutdown()

  posting = new FilePostingListDatabase(fs, dir, 2, searchConfig)
  await posting.init()
  const search = new SearchEngine(posting)
  const results = await search.search('antique globes')
  assert.equal(results.length, 1)
  assert.equal(results[0][0], '2')
  await posting.shutdown()
})
