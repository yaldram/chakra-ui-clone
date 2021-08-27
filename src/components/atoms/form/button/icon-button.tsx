import * as React from 'react'

import { Button, ButtonProps } from './button'

type Omitted =
  | 'leftIcon'
  | 'isFullWidth'
  | 'rightIcon'
  | 'loadingText'
  | 'iconSpacing'

export interface IconButtonProps extends Omit<ButtonProps, Omitted> {
  icon?: React.ReactElement
  isRound?: boolean
  'aria-label': string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      children,
      isRound,
      'aria-label': ariaLabel,
      ...delegated
    } = props

    const element = icon || children
    const buttonChildren = React.isValidElement(element)
      ? React.cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false
        })
      : null

    return (
      <Button
        ref={ref}
        aria-label={ariaLabel}
        padding='0'
        borderRadius={isRound ? '9999px' : '0.375rem'}
        {...delegated}
      >
        {buttonChildren}
      </Button>
    )
  }
)
