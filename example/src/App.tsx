import * as React from 'react'
import {
  Stack,
  IconButton,
  EmailIcon,
  SearchIcon,
  PhoneIcon
} from 'chakra-ui-clone'

export function App() {
  return (
    <Stack m='md'>
      <IconButton aria-label='Search database' icon={<SearchIcon />} />
      <IconButton
        colorScheme='blue'
        aria-label='Search database'
        icon={<SearchIcon />}
      />
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Send email'
        icon={<EmailIcon />}
      />
      <IconButton
        colorScheme='teal'
        aria-label='Call Segun'
        s='xs'
        icon={<PhoneIcon />}
      />
      <IconButton
        colorScheme='teal'
        aria-label='Call Segun'
        s='sm'
        icon={<PhoneIcon />}
      />
      <IconButton
        colorScheme='teal'
        aria-label='Call Segun'
        s='md'
        icon={<PhoneIcon />}
      />
      <IconButton
        colorScheme='teal'
        aria-label='Call Segun'
        s='lg'
        icon={<PhoneIcon />}
      />
    </Stack>
  )
}
