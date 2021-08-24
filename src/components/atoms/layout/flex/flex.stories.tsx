import * as React from 'react'

import { Box } from '../box'
import { Flex, FlexProps, Spacer } from '.'

export default {
  title: 'Atoms/Layout/Flex'
}

export const Playground = {
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      defaultValue: 'row',
      description: 'Shorthand for flexDirection style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' }
      },
      control: {
        type: 'select',
        options: [
          'initial',
          'inherit',
          'unset',
          'revert',
          'row',
          'row-reverse',
          'column',
          'column-reverse'
        ]
      }
    },
    justify: {
      name: 'justify',
      type: { name: 'string', required: false },
      defaultValue: 'flex-start',
      description: 'Shorthand for justifyContent style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'flex-start' }
      },
      control: {
        type: 'select',
        options: [
          'justify-content',
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
          'initial',
          'inherit'
        ]
      }
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      defaultValue: 'stretch',
      description: 'Shorthand for alignItems style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'stretch' }
      },
      control: {
        type: 'select',
        options: [
          'stretch',
          'center',
          'flex-start',
          'flex-end',
          'baseline',
          'initial',
          'inherit'
        ]
      }
    }
  },
  render: (args: FlexProps) => (
    <Flex justify='space-between' color='white' {...args}>
      <Box size='100px' bg='green500'>
        Box 1
      </Box>
      <Box size='100px' bg='blue500'>
        Box 2
      </Box>
      <Box basis='300px' size='100px' bg='tomato'>
        Box 3
      </Box>
    </Flex>
  )
}

export const FlexSpacer = {
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      defaultValue: 'row',
      description: 'Shorthand for flexDirection style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' }
      },
      control: {
        type: 'select',
        options: [
          'initial',
          'inherit',
          'unset',
          'revert',
          'row',
          'row-reverse',
          'column',
          'column-reverse'
        ]
      }
    }
  },
  render: (args: FlexProps) => (
    <Flex h='80vh' color='white' {...args}>
      <Box size='100px' p='md' bg='red400'>
        Box 1
      </Box>
      <Spacer />
      <Box size='100px' p='md' bg='green400'>
        Box 2
      </Box>
    </Flex>
  )
}
