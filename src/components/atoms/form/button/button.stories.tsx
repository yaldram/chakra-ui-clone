import * as React from 'react'

import { colorSchemeOptions } from '../../../../theme/colors'
import { Stack } from '../../layout'
import { Button, ButtonProps } from './button'
import { EmailIcon, ArrowForwardIcon } from '../../icons'

export default {
  title: 'Atoms/Form/Button'
}

export const Playground = {
  argTypes: {
    colorScheme: {
      name: 'colorScheme',
      type: { name: 'string', required: false },
      defaultValue: 'gray',
      description: 'The Color Scheme for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' }
      },
      control: {
        type: 'select',
        options: colorSchemeOptions
      }
    },
    s: {
      name: 's',
      type: { name: 'string', required: false },
      defaultValue: 'md',
      description: 'Button size height width and vertical padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg']
      }
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'solid',
      description: 'Button variants',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' }
      },
      control: {
        type: 'select',
        options: ['link', 'outline', 'solid', 'ghost', 'unstyled']
      }
    },
    isLoading: {
      name: 'isLoading',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Pass the isLoading prop to show loading state.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' }
      }
    },
    loadingText: {
      name: 'loadingText',
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'Prop to show a spinner and the loading text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    spinnerPlacement: {
      name: 'spinnerPlacement',
      type: { name: 'string', required: false },
      defaultValue: 'start',
      description: `When a loadingText is present, you can change the
      placement of the spinner element to either start or end.
      It is start by default.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' }
      },
      control: {
        type: 'select',
        options: ['start', 'end']
      }
    },
    isDisabled: {
      name: 'isDisabled',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Pass the isDisable prop to show disabled state.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' }
      }
    },
    isFullWidth: {
      name: 'isFullWidth',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'If true will expand full width.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  render: (args: ButtonProps) => <Button {...args}>Button</Button>
}

export const Default = {
  render: () => (
    <Stack direction='column' spacing='xl'>
      <Stack spacing='lg' align='center'>
        <Button colorScheme='teal' s='xs'>
          Button
        </Button>
        <Button colorScheme='teal' s='sm'>
          Button
        </Button>
        <Button colorScheme='teal' s='md'>
          Button
        </Button>
        <Button colorScheme='teal' s='lg'>
          Button
        </Button>
      </Stack>
      <Stack spacing='lg' align='center'>
        <Button colorScheme='teal' variant='solid'>
          Button
        </Button>
        <Button colorScheme='teal' variant='outline'>
          Button
        </Button>
        <Button colorScheme='teal' variant='ghost'>
          Button
        </Button>
        <Button colorScheme='teal' variant='link'>
          Button
        </Button>
      </Stack>
      <Stack spacing='lg'>
        <Button isLoading colorScheme='teal' variant='solid'>
          Email
        </Button>
        <Button
          isLoading
          loadingText='Loading'
          colorScheme='teal'
          variant='outline'
          spinnerPlacement='start'
        >
          Submit
        </Button>
        <Button
          isLoading
          loadingText='Loading'
          colorScheme='teal'
          variant='outline'
          spinnerPlacement='end'
        >
          Continue
        </Button>
      </Stack>
      <Stack spacing='lg'>
        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme='teal'
          variant='outline'
        >
          Call us
        </Button>
      </Stack>
    </Stack>
  )
}
