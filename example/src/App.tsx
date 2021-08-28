import * as React from 'react'
import { Flex, Stack, Image } from 'chakra-ui-clone'

export function App() {
  return (
    <Stack m='lg' direction='row' spacing='3xl'>
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
        src='https://bit.ly/sa-adebayo'
        fallbackSrc='https://via.placeholder.com/150'
        fit='cover'
        alt='Segun Adebayo'
        onError={() => alert('File Failed to Load')}
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
