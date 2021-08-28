import * as React from 'react'
import { Stack, Badge, Text } from 'chakra-ui-clone'

export function App() {
  return (
    <Stack m='lg' direction='column' spacing='xl'>
      <Stack>
        <Badge>Default</Badge>
        <Badge colorScheme='green'>Success</Badge>
        <Badge colorScheme='red'>Removed</Badge>
        <Badge colorScheme='purple'>New</Badge>
      </Stack>
      <Stack>
        <Badge variant='outline' colorScheme='green'>
          Default
        </Badge>
        <Badge variant='solid' colorScheme='green'>
          Success
        </Badge>
        <Badge variant='subtle' colorScheme='green'>
          Removed
        </Badge>
      </Stack>

      <Stack>
        <Text fontSize='xl' fontWeight='bold'>
          Segun Adebayo
          <Badge ml='0.25rem' fontSize='0.8em' colorScheme='green'>
            New
          </Badge>
        </Text>
      </Stack>
    </Stack>
  )
}
