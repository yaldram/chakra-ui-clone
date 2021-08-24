import * as React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from 'chakra-ui-clone'

import { App } from './App'

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
