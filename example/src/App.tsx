import * as React from 'react'
import { Stack, Button, EmailIcon, ArrowForwardIcon } from 'chakra-ui-clone'

export function App() {
  return (
    <Stack m='md' direction='column' spacing='xl'>
      <Stack spacing='lg' align='center'>
        <Button colorScheme='teal' s='xs'>
          Button
        </Button>
        <Button colorScheme='teal' s='sm'>
          Button
        </Button>
        <Button colorScheme='teal' s='md'>
          Button
        </Button>
        <Button colorScheme='teal' s='lg'>
          Button
        </Button>
      </Stack>
      <Stack spacing='lg' align='center'>
        <Button colorScheme='teal' variant='solid'>
          Button
        </Button>
        <Button colorScheme='teal' variant='outline'>
          Button
        </Button>
        <Button colorScheme='teal' variant='ghost'>
          Button
        </Button>
        <Button colorScheme='teal' variant='link'>
          Button
        </Button>
      </Stack>
      <Stack spacing='lg'>
        <Button isLoading colorScheme='teal' variant='solid'>
          Email
        </Button>
        <Button
          isLoading
          loadingText='Loading'
          colorScheme='teal'
          variant='outline'
          spinnerPlacement='start'
        >
          Submit
        </Button>
        <Button
          isLoading
          loadingText='Loading'
          colorScheme='teal'
          variant='outline'
          spinnerPlacement='end'
        >
          Continue
        </Button>
      </Stack>
      <Stack spacing='lg'>
        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme='teal'
          variant='outline'
        >
          Call us
        </Button>
      </Stack>
    </Stack>
  )
}
