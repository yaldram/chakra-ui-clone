import * as React from 'react'
import { VStack, Box } from 'chakra-ui-clone'

export function App() {
  return (
    <VStack m='1rem' align='stretch'>
      <Box p='md' h='40px' bg='yellow200'>
        1
      </Box>
      <Box p='md' h='40px' bg='tomato'>
        2
      </Box>
      <Box p='md' h='40px' bg='pink100'>
        3
      </Box>
    </VStack>
  )
}
