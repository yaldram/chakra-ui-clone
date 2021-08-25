import * as React from 'react'
import { Grid, GridItem } from 'chakra-ui-clone'

export function App() {
  return (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap='md'
    >
      <GridItem rowSpan={2} colSpan={1} bg='tomato' />
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={4} bg='tomato' />
    </Grid>
  )
}
