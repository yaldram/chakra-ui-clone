import * as React from 'react'

import { spacingOptions } from '../../../../theme/spacing'
import { Box, BoxProps } from '.'

export default {
  title: 'Atoms/Layout/Box'
}

export const Playground = {
  parameters: {
    backgrounds: {
      default: 'grey'
    }
  },
  args: {
    bg: 'green800',
    color: 'white',
    p: 'md'
  },
  argTypes: {
    bg: {
      name: 'bg',
      type: { name: 'string', required: false },
      description: 'Background Color CSS Prop for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'transparent' }
      }
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color CSS Prop for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' }
      }
    },
    p: {
      name: 'p',
      type: { name: 'string', required: false },
      ...spacingOptions(),
      description: `Padding CSS prop for the Component shothand for padding.
        We also have pt, pb, pl, pr.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'select'
      }
    }
  },
  render: (args: BoxProps) => <Box {...args}>Hello</Box>
}

export const Default = {
  render: (args: BoxProps) => (
    <Box bg='red500' color='white' p='md' {...args}>
      Submit.
    </Box>
  )
}
