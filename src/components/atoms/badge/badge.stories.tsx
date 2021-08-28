import * as React from 'react'

import { colorSchemeOptions } from '../../../theme/colors'
import { Stack } from '../layout'
import { Text } from '../typography'
import { Badge, BadgeProps } from '.'

export default {
  title: 'Atoms/Badge'
}

export const Playground = {
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'subtle',
      description: 'Variant for the Badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sublte' }
      },
      control: {
        type: 'select',
        options: ['outline', 'solid', 'subtle']
      }
    },
    colorScheme: {
      name: 'colorScheme',
      type: { name: 'string', required: false },
      defaultValue: 'gray',
      description: 'The Color Scheme for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' }
      },
      control: {
        type: 'select',
        options: colorSchemeOptions
      }
    }
  },
  render: (args: BadgeProps) => <Badge {...args}>Default</Badge>
}

export const Default = {
  render: () => (
    <Stack direction='column' spacing='xl'>
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
