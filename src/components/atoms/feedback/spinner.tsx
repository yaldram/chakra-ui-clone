import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { variant as variantFun, ResponsiveValue } from 'styled-system'

import { Box, BoxProps } from '../layout'
import { VisuallyHiddenText } from '../typography'

const spin = keyframes`
 0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface SpinnerOptions {
  emptyColor?: string
  thickness?: string
  speed?: string
  label?: string
  variant?: ResponsiveValue<SpinnerSize>
}

export interface SpinnerProps
  extends Omit<BoxProps, keyof SpinnerOptions>,
    SpinnerOptions {}

const animation = (speed = '0.45s') => css`
  ${spin} ${speed} linear infinite;
`
const BaseSpinner = styled(Box)<SpinnerProps>`
  animation: ${({ speed }) => animation(speed)};

  width: 1em;
  height: 1em;

  ${variantFun({
    prop: 'variant',
    variants: {
      xs: {
        width: '1.5rem',
        height: '1.5rem'
      },
      sm: {
        width: '2rem',
        height: '2rem'
      },
      md: {
        width: '2.5rem',
        height: '2.5rem'
      },
      lg: {
        width: '3rem',
        height: '3rem'
      },
      xl: {
        width: '3.5rem',
        height: '3.5rem'
      }
    }
  })}
`

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (props, ref) => {
    const {
      label = 'Loading....',
      thickness = '2px',
      emptyColor = 'transparent',
      color,
      ...delegated
    } = props

    const spinnerStyles = {
      display: 'inline-block',
      borderColor: 'currentColor',
      borderStyle: 'solid',
      borderRadius: '99999px',
      borderWidth: thickness,
      borderBottomColor: emptyColor,
      borderLeftColor: emptyColor,
      color
    }

    return (
      <BaseSpinner ref={ref} {...spinnerStyles} {...delegated}>
        {label && <VisuallyHiddenText>{label}</VisuallyHiddenText>}
      </BaseSpinner>
    )
  }
)
