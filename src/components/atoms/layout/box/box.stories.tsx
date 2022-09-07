import * as React from 'react'
import { StoryObj } from '@storybook/react'

import { spacingOptions } from '../../../../theme/spacing'
import { Box, BoxProps } from '.'

export default {
  title: 'Atoms/Layout/Box'
}

export const Playground: StoryObj<BoxProps> = {
  parameters: {
    backgrounds: {
      default: 'grey'
    },
    controls: {
      exclude: ['bg']
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
  render: (args) => <Box {...args}>Hello</Box>
}

export const Default: StoryObj<BoxProps> = {
  render: () => (
    <Box bg='red500' color='white' p='md'>
      Submit.
    </Box>
  )
}
