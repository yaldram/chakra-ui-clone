import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { defaultTheme } from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

export const ChakraProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
