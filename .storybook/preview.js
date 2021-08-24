import React from 'react'
import { create } from '@storybook/theming'
import { addReadme } from 'storybook-readme'

import { ChakraProvider } from '../src/provider'

const basicTheme = create({
  base: 'light',
  brandTitle: 'Chakra UI Clone'
})

export const parameters = {
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme,
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms'],
      method: 'alphabetical'
    }
  },
  readMe: {
    codeTheme: 'duotone-sea',

    StoryPreview: ({ children }) => <div>{children}</div>,

    HeaderPreview: ({ children }) => <div>{children}</div>,

    FooterPreview: ({ children }) => <div>{children}</div>,

    DocPreview: ({ children }) => (
      <div style={{ padding: '1.6rem' }}>{children}</div>
    )
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  knobs: {
    escapeHTML: false
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'grey', value: '#ccc' }
    ]
  }
}

export const decorators = [
  addReadme,
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  )
]
