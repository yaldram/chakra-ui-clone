import * as React from 'react'

import { Booleanish } from './types'

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[]
}

export function canUseDOM(): boolean {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}

export const isBrowser = canUseDOM()

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined
