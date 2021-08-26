import * as React from 'react'
import { Stack, Spinner } from 'chakra-ui-clone'

export function App() {
  return (
    <Stack spacing='lg'>
      <Spinner variant='xs' />
      <Spinner variant='sm' />
      <Spinner variant='md' />
      <Spinner variant='lg' />
      <Spinner variant='xl' />
      <Spinner variant='sm' color='red500' />
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray200'
        color='orange500'
        variant='xl'
      />
    </Stack>
  )
}
