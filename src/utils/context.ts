import * as React from 'react'

export interface CreateContextOptions {
  /**
   * If `true`, React will throw if context is `null` or `undefined`
   * In some cases, you might want to support nested context,
   * so you can set it to `false`
   */
  strict?: boolean
  /**
   * Error message to throw if the context is `undefined`
   */
  errorMessage?: string
  /**
   * The display name of the context
   */
  name?: string
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext<ContextType>(options: CreateContextOptions = {}) {
  const {
    strict = true,
    // eslint-disable-next-line max-len
    errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    name
  } = options

  const componentContext = React.createContext<ContextType | undefined>(
    undefined
  )

  componentContext.displayName = name

  function useContext() {
    const context = React.useContext(componentContext)

    if (!context && strict) {
      const error = new Error(errorMessage)
      error.name = 'ContextError'
      Error.captureStackTrace?.(error, useContext)
      throw error
    }

    return context
  }

  return [
    componentContext.Provider,
    useContext,
    componentContext
  ] as CreateContextReturn<ContextType>
}
