import * as React from 'react'

import { colorSchemeOptions } from '../../../theme/colors'
import { Stack, HStack } from '../layout'
import {
  Tag,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
  TagCloseButton,
  TagProps
} from '.'
import { EmailIcon } from '../icons'

export default {
  title: 'Atoms/Tags'
}

export const Playground = {
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'subtle',
      description: 'Variant for the Tag',
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
    },
    s: {
      name: 's',
      type: { name: 'string', required: false },
      defaultValue: 'md',
      description: 'Tag height width and horizontal padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    }
  },
  render: (args: TagProps) => <Tag {...args}>Sample Tag</Tag>
}

export const Default = {
  render: () => (
    <Stack direction='column' spacing='lg'>
      <HStack>
        <Tag s='sm'>Sample Tag</Tag>
        <Tag s='md'>Sample Tag</Tag>
        <Tag s='lg'>Sample Tag</Tag>
      </HStack>
      <HStack>
        {['sm', 'md', 'lg'].map((s) => (
          <Tag s={s} key={s} variant='solid' colorScheme='teal'>
            Sample Tag
          </Tag>
        ))}
      </HStack>
      <HStack>
        {['sm', 'md', 'lg'].map((s) => (
          <Tag s={s} key={s} variant='subtle' colorScheme='cyan'>
            <TagLeftIcon size='12px' as={EmailIcon} />
            <TagLabel>Sample Tag</TagLabel>
          </Tag>
        ))}
      </HStack>
      <HStack>
        {['sm', 'md', 'lg'].map((s) => (
          <Tag s={s} key={s} variant='outline' colorScheme='cyan'>
            <TagLabel>Sample Tag</TagLabel>
            <TagRightIcon size='12px' as={EmailIcon} />
          </Tag>
        ))}
      </HStack>
      <HStack>
        {['sm', 'md', 'lg'].map((s) => (
          <Tag
            borderRadius='9999px'
            s={s}
            key={s}
            variant='solid'
            colorScheme='green'
          >
            <TagLabel>Green</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
      </HStack>
    </Stack>
  )
}
