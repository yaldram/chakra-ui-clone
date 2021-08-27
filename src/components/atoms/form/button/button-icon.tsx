import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export interface ButtonIconProps extends SpaceProps {
  children?: React.ReactNode
}

const BaseSpan = styled.span<ButtonIconProps>`
  ${space}
`
export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { children, ...delegated } = props

  const componentChildren = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-hidden': true,
        focusable: false
      })
    : children

  return <BaseSpan {...delegated}>{componentChildren}</BaseSpan>
}
