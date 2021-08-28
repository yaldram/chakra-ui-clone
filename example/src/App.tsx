import * as React from 'react'
import {
  Stack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AiOutlineUser
} from 'chakra-ui-clone'

export function App() {
  return (
    <Stack m='1rem' direction='column' spacing='xl'>
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
        <AvatarGroup s='lg' max={3}>
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
