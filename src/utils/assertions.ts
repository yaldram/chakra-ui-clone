import { Dict } from './types'

export const isNull = (value: any): value is null => value === null

export function isNumber(value: any): value is number {
  return typeof value === 'number'
}

export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value)
}

export function isFunction(value: any): value is Function {
  return typeof value === 'function'
}

export const isObject = (value: any): value is Dict => {
  const type = typeof value
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !isArray(value)
  )
}
