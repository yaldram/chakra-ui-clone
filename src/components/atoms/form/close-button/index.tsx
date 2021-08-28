import * as React from 'react'
import styled from 'styled-components'
import { variant, position, PositionProps } from 'styled-system'
import { CloseIcon } from '../../icons'

type SizeVariants = 'sm' | 'md' | 'lg'

export interface CloseButtonProps
  extends PositionProps,
    React.ComponentPropsWithoutRef<'button'> {
  s?: SizeVariants
}

const BaseCloseButton = styled.button<CloseButtonProps>`
  border: none;
  outline: none;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  background: transparent;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  padding: 0.25em 0.75em;
  font-weight: 500;

  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;

  color: ${({ color }) => color};

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blackAlpha100};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.blackAlpha200};
  }

  &:focus {
    box-shadow: outline;
  }

  ${position}

  ${variant({
    prop: 's',
    variants: {
      lg: {
        size: '40px',
        fontSize: '16px'
      },
      md: {
        size: '32px',
        fontSize: '12px'
      },
      sm: {
        size: '24px',
        fontSize: '10px'
      }
    }
  })}
`

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>((props, ref) => {
  const { s = 'md', children, ...delegated } = props

  return (
    <BaseCloseButton ref={ref} s={s} {...delegated}>
      {children || <CloseIcon />}
    </BaseCloseButton>
  )
})
