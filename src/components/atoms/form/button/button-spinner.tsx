import * as React from 'react'

import { Box, BoxProps } from '../../layout'
import { Spinner } from '../../feedback'

interface ButtonSpinnerProps extends BoxProps {
  label?: string
  placement?: 'start' | 'end'
}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = (props) => {
  const {
    label,
    placement,
    children = <Spinner color='currentColor' />,
    ...delegated
  } = props

  const marginProp = placement === 'start' ? 'marginRight' : 'marginLeft'

  const spinnerStyles = {
    display: 'flex',
    fontSize: '1em',
    lineHeight: 'normal',
    alignItems: 'center',
    position: label ? 'relative' : 'absolute',
    [marginProp]: label ? '0.5rem' : 0
  }

  return (
    <Box {...spinnerStyles} {...delegated}>
      {children}
    </Box>
  )
}
