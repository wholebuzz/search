# @wholebuzz/search

Persistent inverted index and BM25 search engine with proximity penalty.

## Credits

Scaffolded off [wink-bm25-text-search](https://www.npmjs.com/package/wink-bm25-text-search).

## Example

```
import { LocalFileSystem } from '@wholebuzz/fs/lib/fs'
import { FilePostingListDatabase } from '@wholebuzz/search/lib/posting'
import {
  calcProximityEntryScores,
  searchConfig
} from '@wholebuzz/search/lib/search'

const fileSystem = new LocalFileSystem()
const posting = new FilePostingListDatabase(fileSystem, directory, 2, {
  ...searchConfig,
  scoreTermPair: calcProximityEntryScores,
})
await posting.init()
const search = new SearchEngine(posting)
await posting.addDoc({ title: 'Foo bar', body: 'baz bat' }, 'docid1')
const result = await search.search('baz')
await posting.shutdown()
```

## Table of contents

### Modules

- [posting](docs/modules/posting.md)
- [search](docs/modules/search.md)
