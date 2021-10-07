# @wholebuzz/search

Persistent inverted index and BM25 search engine with proximity penalty.

## Table of contents

### Modules

- [db](docs/modules/db.md)
- [docids](docs/modules/docids.md)
- [heap](docs/modules/heap.md)
- [idf](docs/modules/idf.md)
- [posting](docs/modules/posting.md)
- [record](docs/modules/record.md)
- [search](docs/modules/search.md)
- [test.fixture](docs/modules/test_fixture.md)
- [tokens](docs/modules/tokens.md)
- [types](docs/modules/types.md)

## Credits

Scaffolded off [wink-bm25-text-search](https://www.npmjs.com/package/wink-bm25-text-search).

## Example

```
import { LocalFileSystem } from '@wholebuzz/fs/lib/fs'
import { FilePostingListDatabase } from '@wholebuzz/search/lib/db'
import { calcProximityPostingScores } from '@wholebuzz/search/lib/posting'
import { searchConfig, SearchEngine } from '@wholebuzz/search/lib/search'

const fileSystem = new LocalFileSystem()
const existingDirectory = '/tmp/search-test/data'
const posting = new FilePostingListDatabase(fileSystem, existingDirectory, 2, {
  ...searchConfig,
  scoreTermPair: calcProximityPostingScores,
})
await posting.init()
const search = new SearchEngine(posting)
await posting.addDoc({ title: 'Foo bar', body: 'baz bat' }, 'docid1')
const result = await search.search('baz')
// [ [ 'docid1', 0.28768208622932434 ] ]
console.log(result)
await posting.shutdown()
```

```
$ find /tmp/search-test/data
/tmp/search-test/data
/tmp/search-test/data/21
/tmp/search-test/data/21/21HWFQ.tfpl
/tmp/search-test/data/2a
/tmp/search-test/data/2a/2aN7FU.tfpl
/tmp/search-test/data/36
/tmp/search-test/data/36/36XNgb.tfpl
/tmp/search-test/data/lexicon.json.gz
/tmp/search-test/data/docids.level
/tmp/search-test/data/docids.level/000003.log
/tmp/search-test/data/docids.level/LOCK
/tmp/search-test/data/docids.level/CURRENT
/tmp/search-test/data/docids.level/LOG
/tmp/search-test/data/docids.level/MANIFEST-000002
/tmp/search-test/data/23
/tmp/search-test/data/23/23YJVm.tfpl
```

```
$ gzip -dc /tmp/search-test/data/lexicon.json.gz | jq .
{
  "config": {
    "bm25Params": {
      "b": 0.75,
      "k": 1,
      "k1": 1.2
    },
    "fldWeights": {
      "author": 1,
      "body": 1,
      "title": 2
    },
    "ovFldNames": []
  },
  "idf": {
    "baz": {
      "data": [],
      "id": 0,
      "term": "baz",
      "value": 0.28768207245178085,
      "fileInode": 334778279,
      "fileEntries": 1
    },
    "bat": {
      "data": [],
      "id": 1,
      "term": "bat",
      "value": 0.28768207245178085,
      "fileInode": 334778281,
      "fileEntries": 1
    },
    "foo": {
      "data": [],
      "id": 2,
      "term": "foo",
      "value": 0.28768207245178085,
      "fileInode": 334778283,
      "fileEntries": 1
    },
    "bar": {
      "data": [],
      "id": 3,
      "term": "bar",
      "value": 0.28768207245178085,
      "fileInode": 334778285,
      "fileEntries": 1
    }
  },
  "minIDF": 0,
  "avgCorpusLength": 6,
  "totalCorpusLength": 6,
  "totalDocs": 1
}
```
