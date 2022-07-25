import * as React from 'react'

import { spacingOptions } from '../../../../theme/spacing'
import { Center } from '../containers'
import { Wrap, WrapItem, WrapProps } from '.'

export default {
  title: 'Atoms/Layout/Wrap'
}

export const Playground = {
  args: {
    spacing: 'md',
    justify: 'flex-start',
    align: 'stretch'
  },
  argTypes: {
    spacing: {
      name: 'spacing',
      type: { name: 'string', required: false },
      ...spacingOptions(),
      description: `Margin for the child elements`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
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
  render: (args: WrapProps) => (
    <Wrap {...args}>
      <WrapItem>
        <Center w='180px' h='80px' bg='red200'>
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='40px' bg='green200'>
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='120px' h='80px' bg='tomato'>
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='120px' bg='blue200'>
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='blackAlpha500'>
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  )
}

export const Default = {
  render: () => (
    <Wrap spacing='30px'>
      <WrapItem>
        <Center w='180px' h='80px' bg='red200'>
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='green200'>
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='120px' h='80px' bg='tomato'>
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='blue200'>
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='blackAlpha500'>
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  )
}
