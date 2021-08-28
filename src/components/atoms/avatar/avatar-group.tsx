import * as React from 'react'
import styled from 'styled-components'
import { variant, SpaceProps, ResponsiveValue } from 'styled-system'

import { filterUndefined, getValidChildren } from '../../../utils'
import { Flex, FlexProps } from '../layout'
import { AvatarSizes } from './avatar'

interface AvatarGroupOptions {
  spacing?: SpaceProps['margin']
  max?: number
  s?: ResponsiveValue<AvatarSizes>
}

export interface AvatarGroupProps
  extends AvatarGroupOptions,
    Omit<FlexProps, 'size'> {}

const ExcessLabel = styled(Flex)<AvatarGroupProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: medium;
  position: relative;
  flex-shrink: 0;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gray200};
  ${variant({
    prop: 's',
    variants: {
      '2xs': {
        size: '1rem'
      },
      xs: {
        size: '1.5rem'
      },
      sm: {
        size: '2rem'
      },
      md: {
        size: '3rem'
      },
      lg: {
        size: '4rem'
      },
      xl: {
        size: '6rem'
      },
      '2xl': {
        size: '8rem'
      },
      full: {
        size: '100%'
      }
    }
  })};
`
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      borderColor,
      max,
      spacing = '-0.75rem',
      borderRadius = '9999px',
      s = 'md',
      children,
      ...delegated
    } = props

    const validChildren = getValidChildren(children)

    const childrenWithinMax = max ? validChildren.slice(0, max) : validChildren

    const excess = max != null && validChildren.length - max

    const reversedChildren = childrenWithinMax.reverse()

    const clones = reversedChildren.map((child, index) => {
      const isFirstAvatar = index === 0

      const childProps = {
        marginEnd: isFirstAvatar ? 0 : spacing,
        s,
        borderColor: child.props.borderColor ?? borderColor,
        showBorder: true
      }

      return React.cloneElement(child, filterUndefined(childProps))
    })

    return (
      <Flex
        ref={ref}
        role='group'
        direction='row-reverse'
        align='center'
        justify='flex-end'
        {...delegated}
      >
        {excess > 0 && (
          <ExcessLabel
            s={s}
            borderRadius={borderRadius}
            marginStart={spacing}
          >{`+${excess}`}</ExcessLabel>
        )}
        {clones}
      </Flex>
    )
  }
)
