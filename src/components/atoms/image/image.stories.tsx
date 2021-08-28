import * as React from 'react'

import { Flex, Stack } from '../layout'
import { Image } from './image'

export default {
  title: 'Atoms/Image'
}

export const Default = {
  render: () => (
    <Stack direction='row' spacing='3xl'>
      <Image
        boxSize='150px'
        borderRadius='9999px'
        src='https://bit.ly/sage-adebayo'
        ignoreFallback
        fit='cover'
        alt='Segun Adebayo'
      />
      <Image
        boxSize='150px'
        borderRadius='9999px'
        src='https://bit.ly/sage-adebayo'
        fallbackSrc='https://via.placeholder.com/150'
        fit='cover'
        alt='Segun Adebayo'
      />
      <Image
        boxSize='150px'
        borderRadius='9999px'
        src='https://bit.ly/sage-adebayo'
        fallback={
          <Flex
            bg='orange500'
            align='center'
            justify='center'
            color='white'
            size='150px'
            borderRadius='9999px'
          >
            Loading...
          </Flex>
        }
        fit='cover'
        alt='Segun Adebayo'
      />
    </Stack>
  )
}
