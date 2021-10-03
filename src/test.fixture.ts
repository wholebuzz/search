import * as fs from 'fs'
import rimraf from 'rimraf'
import { promisify } from 'util'

export interface Event {
  guid: string
  type: string
  props?: Record<string, any> | null
  tags?: Record<string, any> | null
  inserted_at?: Date
  updated_at?: Date
}

export interface HasFingerprint {
  fingerprint: bigint
}

export const rmrf = promisify(rimraf)

export async function recreateDirectory(dir: string) {
  await rmrf(dir)
  fs.mkdirSync(dir)
  return dir
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
