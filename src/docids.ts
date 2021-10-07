import level from 'level'
import { LevelUp } from 'levelup'
import sub from 'subleveldown'
import { DocIdDatabase, DocStats } from './types'

export class MemoryDocIdDatabase extends DocIdDatabase {
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

export class LevelDocIdDatabase extends DocIdDatabase {
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
      (err) => console.log('LevelDocIdDatabase.add', err.message)
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
