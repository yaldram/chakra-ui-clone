import * as React from 'react'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Input } from '../input/input'
import { FormControl, FormHelperText } from './form-control'
import { FormControlDemo } from './form-control.demo'
import { FormLabel } from './form-label'

export default {
  title: 'Molecules/Form/FormControl'
}

export const Default = {
  render: () => {
    return (
      <FormControl isRequired>
        <FormLabel>Your Email</FormLabel>
        <Input type='email' />
        <FormHelperText>We will not share your email</FormHelperText>
      </FormControl>
    )
  }
}

export const Demo = {
  render: () => <FormControlDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const usernameErrorText = canvas.getByTestId('username-feedback')
    const passwordErrorText = canvas.getByTestId('password-feedback')

    await expect(usernameErrorText).toBeInTheDocument()
    await expect(usernameErrorText).toHaveTextContent('Username is required.')

    await expect(passwordErrorText).toBeInTheDocument()
    await expect(passwordErrorText).toHaveTextContent('Password is required.')

    const usernameInput = canvas.getByTestId('username')
    const passwordInput = canvas.getByTestId('password')

    await userEvent.type(usernameInput, 'yaldram')

    await userEvent.type(passwordInput, 'secret@123')

    const usernameHelpText = canvas.getByTestId('username-helptext')
    const passwordHelpText = canvas.getByTestId('password-helptext')

    await expect(usernameHelpText).toBeInTheDocument()

    await expect(usernameHelpText).toHaveTextContent(
      'Your username has to be awesome.'
    )

    await expect(passwordHelpText).toBeInTheDocument()

    await expect(passwordHelpText).toHaveTextContent(
      'Your password has to be super secret.'
    )
  }
}
