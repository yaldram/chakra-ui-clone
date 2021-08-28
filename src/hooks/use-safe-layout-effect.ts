import * as React from 'react'

import { isBrowser } from '../utils'

/**
 * useSafeLayoutEffect enables us to safely call
 * `useLayoutEffect` on the browser (for SSR reasons)
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser.
 *
 */

export const useSafeLayoutEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect
