import * as React from 'react'

import { Stack } from '../layout'
import { AiOutlineUser } from '../icons'
import { Avatar, AvatarBadge, AvatarProps } from './avatar'
import { AvatarGroup } from './avatar-group'

export default {
  title: 'Atoms/Avatar'
}

export const Playground = {
  args: {
    s: 'md',
    name: 'Segun Adebayo',
    src: 'https://bit.ly/sage-adebayo'
  },
  argTypes: {
    s: {
      name: 's',
      type: { name: 'string', required: false },
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Size for the Avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    },
    name: {
      name: 'size',
      type: { name: 'string', required: false },
      description: `The name of the person in the avatar.
      -If src has loaded, the name will be used as the alt attribute of the img
      -If src is not loaded, the name will be used to create the initials`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    src: {
      name: 'src',
      type: { name: 'string', required: false },
      description: 'The image url of the Avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    }
  },
  render: (args: AvatarProps) => <Avatar {...args} />
}

export const Default = {
  render: () => (
    <Stack direction='column' spacing='xl'>
      <Stack>
        <Avatar src='https://bit.ly/broken-link' />
        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        <Avatar name='Segun Adebayo' />
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
      </Stack>
      <Stack>
        <Avatar>
          <AvatarBadge size='1.25em' bg='green500' />
        </Avatar>
        <Avatar>
          <AvatarBadge borderColor='papayawhip' bg='tomato' size='1.25em' />
        </Avatar>
      </Stack>
      <Stack>
        <Avatar bg='red500' icon={<AiOutlineUser fontSize='1.5rem' />} />
        <Avatar bg='teal500' />
      </Stack>
      <Stack>
        <AvatarGroup s='md' max={2}>
          <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}
