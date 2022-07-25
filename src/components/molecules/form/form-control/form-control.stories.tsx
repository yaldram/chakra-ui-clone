import * as React from 'react'

import { Input } from '../input/input'
import { FormControl, FormHelperText } from './form-control'
import { FormLabel } from './form-label'

export default {
  title: 'Molecules/Form/FormControl'
}

export const Default = {
  render: () => {
    return (
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type='email' />
        <FormHelperText>We will not share your email</FormHelperText>
      </FormControl>
    )
  }
}
