import * as React from 'react'
import { Text } from 'chakra-ui-clone'

export function App() {
  return (
    <>
      <Text fontSize='50px' color='tomato'>
        I'm using a custom font-size value for this text
      </Text>
      <Text as='i'>Italic</Text>
      <br />
      <Text as='u'>Underline</Text>
      <br />
      <Text as='s'>Strike Through</Text>
    </>
  )
}
