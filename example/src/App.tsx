import * as React from 'react'
import { HStack, Square, Circle } from 'chakra-ui-clone'

export function App() {
  return (
    <HStack spacing='4xl'>
      <Square size='40px' bg='tomato' color='white'>
        1
      </Square>
      <Square
        as='span'
        size='40px'
        bg='tomato'
        color='white'
        centerContent={false}
      >
        2
      </Square>
      <Circle size='40px' bg='tomato' color='white'>
        3
      </Circle>
    </HStack>
  )
}
