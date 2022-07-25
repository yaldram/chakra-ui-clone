import * as React from 'react'
import { Box, Button, CheckIcon, PhoneIcon, Stack } from '../../../atoms'

import { InputGroup } from './input-group'
import { InputProps, Input } from './input'
import { InputLeftElement, InputRightElement } from './input-element'

export default {
  title: 'Molecules/Form/Input'
}

export const Playground = {
  args: {
    s: 'md',
    variant: 'outline'
  },
  argTypes: {
    s: {
      name: 's',
      type: { name: 'string', required: false },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Button size height width and vertical padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      description: 'Button variants',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outline' }
      },
      control: {
        type: 'select'
      }
    }
  },
  render: (args: InputProps) => (
    <Input placeholder='Here is a sample placeholder' {...args} />
  )
}

export const InputGroupDemo = {
  render: () => (
    <Stack direction='column' spacing='15px'>
      <InputGroup groupSize='lg'>
        <InputLeftElement pointerEvents='none'>
          <PhoneIcon color='gray300' />
        </InputLeftElement>
        <Input type='tel' placeholder='Phone number' />
      </InputGroup>

      <InputGroup groupSize='lg'>
        <InputLeftElement pointerEvents='none' color='gray300' fontSize='1.2em'>
          $
        </InputLeftElement>
        <Input placeholder='Enter amount' />
        <InputRightElement>
          <CheckIcon color='green500' />
        </InputRightElement>
      </InputGroup>
      <Box>
        <InputGroup groupSize='md'>
          <Input type='password' placeholder='Enter password' />
          <InputRightElement pr='0.5rem' w='4.5rem'>
            <Button height='1.5rem' s='sm'>
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Input type='password' placeholder='Enter password' />
    </Stack>
  )
}
