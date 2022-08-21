import React from 'react'
import { Parameters } from '@storybook/addons'

import { ChakraProvider } from '../src/provider'

export const parameters: Parameters = {
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms'],
      method: 'alphabetical'
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'grey', value: '#ccc' }
    ]
  }
}

const withChakraProvider = (Story) => (
  <ChakraProvider>
    <Story />
  </ChakraProvider>
)

/**
 * This decorator is a global decorator will
 * be applied to each and every story
 */
export const decorators = [withChakraProvider]
