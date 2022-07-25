import * as React from 'react'

import { colorSchemeOptions } from '../../../../theme/colors'
import { Stack } from '../../layout'
import { Button, ButtonProps } from './button'
import { IconButton } from './icon-button'
import { EmailIcon, ArrowForwardIcon, SearchIcon, PhoneIcon } from '../../icons'

export default {
  title: 'Atoms/Form/Button'
}

export const Playground = {
  args: {
    colorScheme: 'gray',
    s: 'md',
    variant: 'solid',
    isLoading: false,
    loadingText: '',
    spinnerPlacement: 'start',
    isDisabled: false,
    isFullWidth: false
  },
  argTypes: {
    colorScheme: {
      name: 'colorScheme',
      type: { name: 'string', required: false },
      options: colorSchemeOptions,
      description: 'The Color Scheme for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' }
      },
      control: {
        type: 'select'
      }
    },
    s: {
      name: 's',
      type: { name: 'string', required: false },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Button size height width and vertical padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      options: ['link', 'outline', 'solid', 'ghost', 'unstyled'],
      description: 'Button variants',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' }
      },
      control: {
        type: 'select'
      }
    },
    isLoading: {
      name: 'isLoading',
      type: { name: 'boolean', required: false },
      description: 'Pass the isLoading prop to show loading state.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' }
      }
    },
    loadingText: {
      name: 'loadingText',
      type: { name: 'string', required: false },
      description: 'Prop to show a spinner and the loading text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    spinnerPlacement: {
      name: 'spinnerPlacement',
      type: { name: 'string', required: false },
      options: ['start', 'end'],
      description: `When a loadingText is present, you can change the
      placement of the spinner element to either start or end.
      It is start by default.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' }
      },
      control: {
        type: 'select'
      }
    },
    isDisabled: {
      name: 'isDisabled',
      type: { name: 'boolean', required: false },
      description: 'Pass the isDisable prop to show disabled state.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' }
      }
    },
    isFullWidth: {
      name: 'isFullWidth',
      type: { name: 'boolean', required: false },
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

export const ButtonIcon = {
  render: () => (
    <Stack>
      <IconButton aria-label='Search database' icon={<SearchIcon />} />
      <IconButton
        colorScheme='blue'
        aria-label='Search database'
        icon={<SearchIcon />}
      />
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Send email'
        icon={<EmailIcon />}
      />
      <IconButton
        colorScheme='teal'
        aria-label='Call Segun'
        s='lg'
        icon={<PhoneIcon />}
      />
    </Stack>
  )
}
