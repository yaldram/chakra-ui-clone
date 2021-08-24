import * as React from 'react'

import { Flex, FlexProps } from '../flex'

type SqureOmitted = 'width' | 'height' | 'w' | 'h'

export interface SquareProps extends Omit<FlexProps, SqureOmitted> {
  centerContent?: boolean
}

export const Square = React.forwardRef<HTMLDivElement, SquareProps>(
  (props, ref) => {
    const { size, centerContent = true, children, ...delegated } = props

    const squareProps = centerContent && {
      align: 'center',
      justify: 'center'
    }

    return (
      <Flex
        ref={ref}
        size={size}
        {...squareProps}
        grow={0}
        shrink={0}
        {...delegated}
      >
        {children}
      </Flex>
    )
  }
)

export const Circle = React.forwardRef<HTMLDivElement, SquareProps>(
  (props, ref) => {
    const { size, children, ...delegated } = props

    return (
      <Square ref={ref} size={size} {...delegated} borderRadius='9999px'>
        {children}
      </Square>
    )
  }
)

interface CenterProps
  extends Omit<FlexProps, 'display' | 'align' | 'justify'> {}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  (props, ref) => {
    const { children, ...delegated } = props

    return (
      <Flex ref={ref} align='center' justify='center' {...delegated}>
        {children}
      </Flex>
    )
  }
)

export interface ContainerProps extends FlexProps {
  centerContent?: boolean
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    const { children, centerContent, ...delegated } = props

    const centerContentProps = centerContent && {
      align: 'center'
    }

    return (
      <Flex
        ref={ref}
        width='100%'
        mx='auto'
        maxW='60ch'
        px='10px'
        direction='column'
        {...centerContentProps}
        {...delegated}
      >
        {children}
      </Flex>
    )
  }
)
