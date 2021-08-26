import * as React from 'react'

import { fontSizesOptions } from '../../../../theme/typography'
import { Text, TextProps } from '.'

export default {
  title: 'Atoms/Typography/Text'
}

export const Playground = {
  argTypes: {
    fontSize: {
      name: 'fontSize',
      type: { name: 'string', required: false },
      defaultValue: 'md',
      description: 'Font Size from theme.fontSizes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'select',
        ...fontSizesOptions()
      }
    },
    isTruncated: {
      name: 'isTruncated',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Truncate Text.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    noOfLines: {
      name: 'noOfLines',
      type: { name: 'number', required: false },
      defaultValue: 0,
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
  argTypes: {
    as: {
      name: 'as',
      type: { name: 'string', required: false },
      defaultValue: 'p',
      description: 'Element type to render.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'p' }
      },
      control: {
        type: 'select',
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
        ]
      }
    }
  },
  render: (args: TextProps) => <Text {...args}>Sample Text</Text>
}
