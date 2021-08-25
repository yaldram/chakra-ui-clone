import { Dict, FilterFn } from './types'

export function objectFilter<T extends Dict>(object: T, fn: FilterFn<T>) {
  const result: Dict = {}

  Object.keys(object).forEach((key) => {
    const value = object[key]
    const shouldPass = fn(value, key, object)
    if (shouldPass) {
      result[key] = value
    }
  })

  return result
}

export const filterUndefined = (object: Dict) =>
  objectFilter(object, (value) => value !== null && value !== undefined)

export const objectKeys = <T extends Dict>(obj: T) =>
  Object.keys(obj) as (keyof T)[]
