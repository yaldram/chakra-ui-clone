import * as React from 'react'

export function useId(idProp?: string, prefix?: string): string {
  const id = React.useId()

  return React.useMemo(
    () => idProp || [prefix, id].filter(Boolean).join('-'),
    [idProp, prefix, id]
  )
}
