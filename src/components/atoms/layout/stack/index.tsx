import * as React from 'react'
import styled from 'styled-components'
import { variant, ResponsiveValue } from 'styled-system'

import { getValidChildren } from '../../../../utils'
import { Flex, FlexProps } from '../flex'

type StackVariants = 'row' | 'column' | 'row-reverse' | 'column-reverse'

type StackOptions = {
  spacing: string
  direction: ResponsiveValue<StackVariants>
}

type BaseStackProps = StackOptions & FlexProps

const selector = '& > *:not(style) ~ *:not(style)'

const stackVariants = (spacing: string) => ({
  row: {
    flexDirection: 'row',
    [selector]: {
      margin: 0,
      marginLeft: spacing
    }
  },
  column: {
    flexDirection: 'column',
    [selector]: {
      margin: 0,
      marginTop: spacing
    }
  },
  'row-reverse': {
    flexDirection: 'row-reverse',
    [selector]: {
      margin: 0,
      marginRight: spacing
    }
  },
  'column-reverse': {
    flexDirection: 'column-reverse',
    [selector]: {
      margin: 0,
      marginBottom: spacing
    }
  }
})

const BaseStack = styled(Flex)<BaseStackProps>`
  & > * {
    margin: 0;
  }

  ${(props) =>
    variant({
      prop: 'direction',
      variants: stackVariants(props.spacing)
    })}
`
export interface StackProps
  extends Omit<FlexProps, 'direction'>,
    Partial<StackOptions> {}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    const { direction = 'row', spacing = 'md', children, ...delegated } = props

    return (
      <BaseStack
        direction={direction}
        spacing={spacing}
        ref={ref}
        {...delegated}
      >
        {getValidChildren(children)}
      </BaseStack>
    )
  }
)

export interface HStackProps extends Omit<StackProps, 'direction'> {
  direction?: 'row' | 'row-reverse'
}

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  (props, ref) => {
    const { children, ...delegated } = props

    return (
      <Stack direction='row' align='center' ref={ref} {...delegated}>
        {children}
      </Stack>
    )
  }
)

export interface VStackProps extends Omit<StackProps, 'direction'> {
  direction?: 'column' | 'column-reverse'
}

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  (props, ref) => {
    const { children, ...delegated } = props

    return (
      <Stack direction='column' align='center' ref={ref} {...delegated}>
        {children}
      </Stack>
    )
  }
)
