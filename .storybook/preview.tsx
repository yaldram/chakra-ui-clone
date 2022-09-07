import React from 'react'
import { Parameters } from '@storybook/addons'
import { configure } from '@storybook/testing-library'

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

const testingConfiguration = (Story) => {
  /**
   * configure react testing library such that
   * it uses id instead of data-test-id when
   * we use the getByTestId function
   */
  configure({ testIdAttribute: 'id' })
  return Story()
}

/**
 * This decorator is a global decorator will
 * be applied to each and every story
 */
export const decorators = [withChakraProvider, testingConfiguration]
