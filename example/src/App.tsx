import * as React from 'react'
import { Box, Flex, Spacer } from 'chakra-ui-clone'

export function App() {
  return (
    <Flex m='1rem' color='white'>
      <Box size='100px' p='md' bg='red400'>
        Box 1
      </Box>
      <Spacer />
      <Box size='100px' p='md' bg='green400'>
        Box 2
      </Box>
    </Flex>
  )
}
