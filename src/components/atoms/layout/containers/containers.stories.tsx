import * as React from 'react'

import { HStack, VStack } from '../stack'
import { Container, Square, Circle, Center } from '.'

export default {
  title: 'Atoms/Layout/Containers'
}

export const center = {
  render: () => (
    <Center bg='tomato' h='100px' color='white'>
      This is the Center
    </Center>
  )
}

export const square = {
  render: () => (
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

export const container = {
  render: () => (
    <VStack spacing='4xl'>
      <Container color='white' p='md' bg='red500' maxW='900px'>
        Not Centered Content
      </Container>
      <Container p='md' bg='yellow200' maxW='900px' centerContent>
        Centered Content
      </Container>
    </VStack>
  )
}
