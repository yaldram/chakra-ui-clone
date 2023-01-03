import * as React from 'react'

import { colorSchemeOptions } from '../../../theme/colors'
import { Stack, HStack } from '../layout'
import { EmailIcon } from '../icons'
import { Avatar } from '../avatar'
import {
  Tag,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
  TagCloseButton,
  TagProps,
  TagSizes
} from '.'

const tagSizes: TagSizes[] = ['sm', 'md', 'lg']

export default {
  title: 'Atoms/Tags'
}

export const Playground = {
  args: {
    variant: 'subtle',
    colorScheme: 'gray',
    s: 'md'
  },
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      options: ['outline', 'solid', 'subtle'],
      description: 'Variant for the Tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sublte' }
      },
      control: {
        type: 'select'
      }
    },
    colorScheme: {
      name: 'colorScheme',
      type: { name: 'string', required: false },
      options: colorSchemeOptions,
      description: 'The Color Scheme for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' }
      },
      control: {
        type: 'select'
      }
    },
    s: {
      name: 'size (s)',
      type: { name: 'string', required: false },
      options: ['sm', 'md', 'lg'],
      description: 'Tag height width and horizontal padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
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
        {tagSizes.map((s) => (
          <Tag s={s} key={s} variant='solid' colorScheme='teal'>
            Sample Tag
          </Tag>
        ))}
      </HStack>
      <HStack>
        {tagSizes.map((s) => (
          <Tag s={s} key={s} variant='subtle' colorScheme='cyan'>
            <TagLeftIcon size='12px' as={EmailIcon} />
            <TagLabel>Sample Tag</TagLabel>
          </Tag>
        ))}
      </HStack>
      <HStack>
        {tagSizes.map((s) => (
          <Tag s={s} key={s} variant='outline' colorScheme='cyan'>
            <TagLabel>Sample Tag</TagLabel>
            <TagRightIcon size='12px' as={EmailIcon} />
          </Tag>
        ))}
      </HStack>
      <HStack>
        {tagSizes.map((s) => (
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
      <HStack>
        <Tag s='lg' colorScheme='red' borderRadius='9999px'>
          <Avatar
            src='https://bit.ly/sage-adebayo'
            s='xs'
            name='Segun Adebayo'
            ml='-0.25rem'
            mr='0.5rem'
          />
          <TagLabel>Segun</TagLabel>
        </Tag>
      </HStack>
    </Stack>
  )
}
