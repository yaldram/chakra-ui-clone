import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './theme'

export const ChakraProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
