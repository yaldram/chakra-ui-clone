import * as React from 'react'
import styled from 'styled-components'
import { system, FlexboxProps } from 'styled-system'

import { Box, BoxProps } from '../box'

type FlexOmitted = 'display'

type FlexOptions = {
  direction?: FlexboxProps['flexDirection']
  align?: FlexboxProps['alignItems']
  justify?: FlexboxProps['justifyContent']
  wrap?: FlexboxProps['flexWrap']
}

type BaseFlexProps = FlexOptions & BoxProps

const BaseFlex = styled(Box)<BaseFlexProps>`
  display: flex;
  ${system({
    direction: {
      property: 'flexDirection'
    },
    align: {
      property: 'alignItems'
    },
    justify: {
      property: 'justifyContent'
    },
    wrap: {
      property: 'flexWrap'
    }
  })}
`

export interface FlexProps extends Omit<BaseFlexProps, FlexOmitted> {}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const { direction = 'row', children, ...delegated } = props

    return (
      <BaseFlex ref={ref} direction={direction} {...delegated}>
        {children}
      </BaseFlex>
    )
  }
)

/**
 * A flexible flex spacer that expands along the major axis
 * of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 */
type SpaceOmitted = 'flex' | 'justifySelf' | 'alignSelf'

export interface SpacerProps extends Omit<BoxProps, SpaceOmitted> {}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (props, ref) => {
    const { children, ...delegated } = props

    return (
      <Box
        ref={ref}
        flex='1'
        justifySelf='stretch'
        alignSelf='stretch'
        {...delegated}
      >
        {children}
      </Box>
    )
  }
)
