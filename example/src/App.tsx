import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
  Box,
  Stack
} from 'chakra-ui-clone'
import { useForm } from 'react-hook-form'

type Inputs = {
  user: string
  email: string
}

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  return (
    <Box p='2rem'>
      <form onSubmit={handleSubmit((data) => data)}>
        <Stack direction='column'>
          <FormControl isInvalid={!!errors.user}>
            <FormLabel>User</FormLabel>
            <Input type='user' {...register('user', { required: true })} />
            {errors.user ? (
              <FormErrorMessage>Username is required.</FormErrorMessage>
            ) : (
              <FormHelperText>Enter your username</FormHelperText>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type='email' {...register('email', { required: true })} />
            {errors.email ? (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            ) : (
              <FormHelperText>
                Enter your email, you will receive updates.
              </FormHelperText>
            )}
          </FormControl>
          <Button type='submit'>Submit</Button>
        </Stack>
      </form>
    </Box>
  )
}
