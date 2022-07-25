import * as React from 'react'

import { Box } from '../box'
import { Flex, FlexProps, Spacer } from '.'

export default {
  title: 'Atoms/Layout/Flex'
}

export const Playground = {
  args: {
    direction: 'row',
    justify: 'flex-start',
    align: 'stretch'
  },
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      description: 'Shorthand for flexDirection style prop',
      options: [
        'initial',
        'inherit',
        'unset',
        'revert',
        'row',
        'row-reverse',
        'column',
        'column-reverse'
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' }
      },
      control: {
        type: 'select'
      }
    },
    justify: {
      name: 'justify',
      type: { name: 'string', required: false },
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
      ],
      description: 'Shorthand for justifyContent style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'flex-start' }
      },
      control: {
        type: 'select'
      }
    },
    align: {
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
        defaultValue: { summary: 'stretch' }
      },
      control: {
        type: 'select'
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
  args: {
    direction: 'row'
  },
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      options: [
        'initial',
        'inherit',
        'unset',
        'revert',
        'row',
        'row-reverse',
        'column',
        'column-reverse'
      ],
      description: 'Shorthand for flexDirection style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' }
      },
      control: {
        type: 'select'
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
