import React, { useState } from 'react'

import { Box } from '../../../atoms'
import { Input } from '../input/input'
import { FormControl, FormHelperText } from './form-control'
import { FormErrorMessage } from './form-error'
import { FormLabel } from './form-label'

export function FormControlDemo() {
  const [formInput, setFormInput] = useState({
    username: '',
    password: ''
  })

  const isUsernameError = formInput.username === ''
  const isPasswordError = formInput.password === ''

  function setFormValues(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((state) => ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <Box m='20'>
      <FormControl id='username' isInvalid={isUsernameError}>
        <FormLabel>Username</FormLabel>
        <Input
          type='text'
          name='username'
          value={formInput.username}
          onChange={setFormValues}
        />
        {!isUsernameError ? (
          <FormHelperText>Your username has to be awesome.</FormHelperText>
        ) : (
          <FormErrorMessage>Username is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id='password' isInvalid={isPasswordError}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          name='password'
          value={formInput.password}
          onChange={setFormValues}
        />
        {!isPasswordError ? (
          <FormHelperText>Your password has to be super secret.</FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  )
}
