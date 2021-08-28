import * as React from 'react'
import { HStack, Tag } from 'chakra-ui-clone'

export function App() {
  return (
    <HStack m='2rem'>
      <Tag colorScheme='whatsapp' s='sm'>
        Sample Tag
      </Tag>
      <Tag colorScheme='whatsapp' s='md'>
        Sample Tag
      </Tag>
      <Tag colorScheme='whatsapp' s='lg'>
        Sample Tag
      </Tag>
      <Tag variant='outline' colorScheme='twitter' s='sm'>
        Sample Tag
      </Tag>
      <Tag variant='outline' colorScheme='twitter' s='md'>
        Sample Tag
      </Tag>
      <Tag variant='outline' colorScheme='twitter' s='lg'>
        Sample Tag
      </Tag>
    </HStack>
  )
}
