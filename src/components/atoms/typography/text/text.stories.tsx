import * as React from 'react'

import { fontSizesOptions } from '../../../../theme/typography'
import { Text, TextProps } from '.'

export default {
  title: 'Atoms/Typography/Text'
}

export const Playground = {
  args: {
    fontSize: 'md',
    isTruncated: false,
    noOfLines: '0'
  },
  argTypes: {
    fontSize: {
      name: 'fontSize',
      type: { name: 'string', required: false },
      ...fontSizesOptions(),
      description: 'Font Size from theme.fontSizes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
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
    }
  },
  render: (args: TextProps) => (
    <Text {...args}>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    </Text>
  )
}

export const Default = {
  render: () => (
    <Text>
      Text component is the used to render text and paragraphs within an
      interface. It renders a p tag by default.
    </Text>
  )
}

export const TextTypes = {
  args: {
    as: 'p'
  },
  argTypes: {
    as: {
      name: 'as',
      type: { name: 'string', required: false },
      options: [
        'i',
        'u',
        'abbr',
        'cite',
        'del',
        'em',
        'ins',
        'kbd',
        'mark',
        's',
        'samp',
        'sub',
        'sup'
      ],
      description: 'Element type to render.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'p' }
      },
      control: {
        type: 'select'
      }
    }
  },
  render: (args: TextProps) => <Text {...args}>Sample Text</Text>
}
