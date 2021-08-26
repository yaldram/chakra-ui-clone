import * as React from 'react'
import { Stack, Heading } from 'chakra-ui-clone'

export function App() {
  return (
    <Stack direction='column' spacing='lg'>
      <Heading as='h1' variant='4xl' isTruncated>
        (4xl) In love with React & Next
      </Heading>
      <Heading as='h2' variant='3xl' isTruncated>
        (3xl) In love with React & Next
      </Heading>
      <Heading as='h2' variant='2xl'>
        (2xl) In love with React & Next
      </Heading>
      <Heading as='h2' variant='xl'>
        (xl) In love with React & Next
      </Heading>
      <Heading as='h3' variant='lg'>
        (lg) In love with React & Next
      </Heading>
      <Heading as='h4' variant='md'>
        (md) In love with React & Next
      </Heading>
      <Heading as='h5' variant='sm'>
        (sm) In love with React & Next
      </Heading>
      <Heading as='h6' variant='xs'>
        (xs) In love with React & Next
      </Heading>
      <Heading variant='lg' fontSize={['35px', null, '70px']}>
        I'm overriding this heading
      </Heading>
    </Stack>
  )
}
