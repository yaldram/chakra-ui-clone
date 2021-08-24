/* eslint-disable max-len */
import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { defaultTheme } from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Montserrat;
  }

  a {
    text-decoration: none;
  }
`

export const ChakraProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
