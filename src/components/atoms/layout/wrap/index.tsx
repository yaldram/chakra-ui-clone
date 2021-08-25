import * as React from 'react'
import styled from 'styled-components'

import { Flex, FlexProps } from '../flex'

export interface WrapItemProps extends FlexProps {}

export const WrapItem = React.forwardRef<HTMLDivElement, WrapItemProps>(
  (props, ref) => {
    return <Flex ref={ref} align='flex-start' {...props} />
  }
)

type WrapOptions = {
  spacing: string
}

type BaseWrapProps = FlexProps & WrapOptions

const BaseWrap = styled(Flex)<BaseWrapProps>`
  ${({ spacing, theme }) => {
    const margin = theme.space[spacing] ?? spacing

    return {
      margin: `calc(${margin} / 2 * -1)`,
      '& > *:not(style)': {
        margin
      }
    }
  }}
`

export interface WrapProps extends FlexProps, Partial<WrapOptions> {
  shouldWrapChildren?: boolean
}

export const Wrap = React.forwardRef<HTMLDivElement, WrapProps>(
  (props, ref) => {
    const {
      spacing = 'md',
      shouldWrapChildren = false,
      children,
      ...delegated
    } = props

    const childrenToRender = shouldWrapChildren
      ? React.Children.map(children, (child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <WrapItem key={index}>{child}</WrapItem>
        ))
      : children

    return (
      <BaseWrap ref={ref} spacing={spacing} wrap='wrap' {...delegated}>
        {childrenToRender}
      </BaseWrap>
    )
  }
)
