import { isArray, isObject } from './assertions'
import { objectKeys } from './objects'
import { Dict } from './types'

export function mapResponsive(prop: any, mapper: (val: any) => any) {
  if (isArray(prop)) {
    return prop.map((item) => {
      if (item === null) {
        return null
      }

      return mapper(item)
    })
  }

  if (isObject(prop)) {
    return objectKeys(prop).reduce((result: Dict, key) => {
      return { ...result, [key]: mapper(prop[key]) }
    }, {})
  }

  if (prop !== null) {
    return mapper(prop)
  }

  return null
}
