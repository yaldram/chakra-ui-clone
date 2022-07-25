import * as React from 'react'

import { spacingOptions } from '../../../../theme/spacing'
import { Box } from '../box'
import { Stack, StackProps, HStack, HStackProps, VStack, VStackProps } from '.'

export default {
  title: 'Atoms/Layout/Stack'
}

const spacingSelect = {
  name: 'spacing',
  type: { name: 'string', required: false },
  ...spacingOptions(),
  description: 'The gap between stack items.',
  table: {
    type: { summary: 'string' },
    defaultValue: { summary: 'md' }
  },
  control: {
    type: 'select'
  }
}

const alignSelect = {
  name: 'align',
  type: { name: 'string', required: false },
  options: [
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit'
  ],
  description: 'Shorthand for alignItems style prop',
  table: {
    type: { summary: 'string' },
    defaultValue: { summary: 'center' }
  },
  control: {
    type: 'select'
  }
}

export const Playground = {
  args: {
    direction: 'row',
    spacing: 'md'
  },
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Shorthand for flexDirection style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' }
      },
      control: {
        type: 'select'
      }
    },
    spacing: spacingSelect
  },
  render: (args: StackProps) => (
    <Stack {...args}>
      <Box p='md' h='40px' bg='yellow200'>
        1
      </Box>
      <Box p='md' h='40px' bg='tomato'>
        2
      </Box>
      <Box p='md' h='40px' bg='pink100'>
        3
      </Box>
    </Stack>
  )
}

export const horizontalStack = {
  args: {
    direction: 'row',
    spacing: 'md',
    align: 'center'
  },
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      options: ['row', 'row-reverse'],
      description: 'Shorthand for flexDirection style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' }
      },
      control: {
        type: 'select'
      }
    },
    spacing: spacingSelect,
    align: alignSelect
  },
  render: (args: HStackProps) => (
    <HStack h='50vh' {...args}>
      <Box p='md' bg='yellow200'>
        1
      </Box>
      <Box p='md' bg='tomato'>
        2
      </Box>
      <Box p='md' bg='pink100'>
        3
      </Box>
    </HStack>
  )
}

export const verticalStack = {
  args: {
    direction: 'row',
    spacing: 'md',
    align: 'center'
  },
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      options: ['column', 'column-reverse'],
      description: 'Shorthand for flexDirection style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' }
      },
      control: {
        type: 'select'
      }
    },
    spacing: spacingSelect,
    align: alignSelect
  },
  render: (args: VStackProps) => (
    <VStack {...args}>
      <Box p='md' h='40px' bg='yellow200'>
        1
      </Box>
      <Box p='md' h='40px' bg='tomato'>
        2
      </Box>
      <Box p='md' h='40px' bg='pink100'>
        3
      </Box>
    </VStack>
  )
}
