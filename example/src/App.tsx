import * as React from 'react'
import { Wrap, WrapItem, Center } from 'chakra-ui-clone'

export function App() {
  return (
    <Wrap align='center' justify='center' spacing='30px'>
      <WrapItem>
        <Center w='180px' h='40px' bg='red200'>
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='green200'>
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='tomato'>
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='blue200'>
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  )
}
