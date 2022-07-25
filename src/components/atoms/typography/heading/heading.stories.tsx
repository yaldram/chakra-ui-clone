import * as React from 'react'

import { Heading, HeadingProps } from '.'

export default {
  title: 'Atoms/Typography/Heading'
}

export const Playground = {
  args: {
    variant: 'md',
    isTruncated: false,
    noOfLines: '0',
    as: 'h2'
  },
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      description: `Responsive Values.
      The font size of the heading will
      automatically decrease in size for smaller screens`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    },
    isTruncated: {
      name: 'isTruncated',
      type: { name: 'boolean', required: false },
      description: 'Truncate Text.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    noOfLines: {
      name: 'noOfLines',
      type: { name: 'number', required: false },
      description: 'Number of Lines to show',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      }
    },
    as: {
      name: 'as',
      type: { name: 'string', required: false },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Element type to render.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h2' }
      },
      control: {
        type: 'select'
      }
    }
  },
  render: (args: HeadingProps) => {
    return <Heading {...args}>In love with React & Next and Gatsby.</Heading>
  }
}

export const Default = {
  render: () => <Heading>I am a Heading</Heading>
}
