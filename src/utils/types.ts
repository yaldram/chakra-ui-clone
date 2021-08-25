export type Dict<T = any> = Record<string, T>

export type FilterFn<T> = (value: any, key: any, object: T) => boolean
