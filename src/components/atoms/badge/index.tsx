import * as React from 'react'
import styled from 'styled-components'
import { variant as variantFun, ResponsiveValue } from 'styled-system'

import { ColorScheme as BadgeColorScheme } from '../../../theme/colors'
import { AppTheme } from '../../../theme'
import { Box, BoxProps } from '../layout'

type BadgeVariants = 'outline' | 'solid' | 'subtle'

export interface BadgeProps extends BoxProps {
  colorScheme?: BadgeColorScheme
  variant?: ResponsiveValue<BadgeVariants>
}

function variantSolid(colorScheme: BadgeColorScheme) {
  return {
    bg: `${colorScheme}500`,
    color: 'white'
  }
}

function variantSubtle(colorScheme: BadgeColorScheme) {
  return {
    bg: `${colorScheme}100`,
    color: `${colorScheme}800`
  }
}

function variantOutline(colorScheme: BadgeColorScheme, { colors }: AppTheme) {
  const color = colors[`${colorScheme}500`]
  return {
    color,
    boxShadow: `inset 0 0 0px 1px ${color}`
  }
}

const BaseBadge = styled(Box)<BadgeProps>`
  display: inline-block;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 0.125rem;

  padding-inline-start: 0.25rem;
  padding-inline-end: 0.25rem;

  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ${({ colorScheme = 'gray', theme }) =>
    variantFun({
      prop: 'variant',
      variants: {
        outline: variantOutline(colorScheme, theme),
        solid: variantSolid(colorScheme),
        subtle: variantSubtle(colorScheme)
      }
    })}
`

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref) => {
    const { variant = 'subtle', colorScheme = 'gray', ...delegated } = props

    return (
      <BaseBadge
        as='span'
        ref={ref}
        variant={variant}
        colorScheme={colorScheme}
        {...delegated}
      />
    )
  }
)
