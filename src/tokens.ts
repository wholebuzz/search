import ellipsize from 'ellipsize'
import { decodeHTML as decodeEntities } from 'entities'
import striptags from 'striptags'

export const fnv1a = require('@sindresorhus/fnv1a')
export const nlp = require('wink-nlp-utils')

export type HashFunction = (x: string, size: number) => bigint

export const fnv1aHash = (x: string, size: number) => fnv1a.bigInt(x, { size })

export const tokenizeForHistogram = [
  cleanupText,
  nlp.string.lowerCase,
  nlp.string.tokenize0,
  nlp.tokens.removeWords,
]

export const tokenizeForSearch = [
  cleanupText,
  nlp.string.lowerCase,
  nlp.string.tokenize0,
  nlp.tokens.removeWords,
  nlp.tokens.stem,
  nlp.tokens.propagateNegations,
  (tokens: string[]) => tokens.filter((t: string) => t.length > 1),
]

/**
 * Removes tags, converts entities, and optionally ellipsizes.
 * @param x The string to clean up.
 * @optional maxLength Maximum length.
 */
export function cleanupText(x: string, maxLength?: number) {
  x = decodeEntities(striptags(x))
  if (maxLength) x = ellipsize(x, maxLength)
  return x
}
