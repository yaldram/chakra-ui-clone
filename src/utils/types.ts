export type Dict<T = any> = Record<string, T>

export type FilterFn<T> = (value: any, key: any, object: T) => boolean

export type Booleanish = boolean | 'true' | 'false'

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never
