import * as React from 'react'
import { SimpleGrid, Box } from 'chakra-ui-clone'

export function App() {
  return (
    <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  )
}
