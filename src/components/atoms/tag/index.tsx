import * as React from 'react'
import styled from 'styled-components'
import { variant as variantFun, ResponsiveValue } from 'styled-system'

import { ColorScheme as TagColorScheme } from '../../../theme/colors'
import { AppTheme } from '../../../theme'
import { Icon, IconProps } from '../icon/icon'
import { CloseButtonProps, CloseButton } from '../form/close-button'
import { Box, BoxProps } from '../layout'

type TagVariants = 'outline' | 'solid' | 'subtle'

type TagSizes = 'sm' | 'md' | 'lg'

function variantSolid(colorScheme: TagColorScheme) {
  return {
    bg: `${colorScheme}500`,
    color: 'white'
  }
}

function variantSubtle(colorScheme: TagColorScheme) {
  return {
    bg: `${colorScheme}100`,
    color: `${colorScheme}800`
  }
}

function variantOutline(colorScheme: TagColorScheme, { colors }: AppTheme) {
  const color = colors[`${colorScheme}500`]
  return {
    color,
    boxShadow: `inset 0 0 0px 1px ${color}`
  }
}

export interface TagProps extends Omit<BoxProps, 'size'> {
  colorScheme?: TagColorScheme
  variant?: ResponsiveValue<TagVariants>
  s?: ResponsiveValue<TagSizes>
}

const BaseBadge = styled(Box)<TagProps>`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  max-width: 100%;
  font-weight: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.2;
  outline: 0;

  &:foucs {
    box-shadow: outline;
  }

  ${({ colorScheme = 'gray', theme }) =>
    variantFun({
      prop: 'variant',
      variants: {
        outline: variantOutline(colorScheme, theme),
        solid: variantSolid(colorScheme),
        subtle: variantSubtle(colorScheme)
      }
    })}

  ${variantFun({
    prop: 's',
    variants: {
      sm: {
        minHeight: '1.25rem',
        minWidth: '1.25rem',
        fontSize: 'xs',
        px: '0.5rem'
      },
      md: {
        minHeight: '1.5rem',
        minWidth: '1.5rem',
        fontSize: 'sm',
        px: '0.5rem'
      },
      lg: {
        minHeight: '2rem',
        minWidth: '2rem',
        fontSize: 'md',
        px: '0.75rem'
      }
    }
  })}
`

export const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    variant = 'subtle',
    s = 'md',
    borderRadius = '0.35rem',
    ...delegated
  } = props

  return (
    <BaseBadge
      ref={ref}
      as='span'
      variant={variant}
      s={s}
      borderRadius={borderRadius}
      {...delegated}
    />
  )
})

export interface TagLabelProps extends BoxProps {}

export const TagLabel = React.forwardRef<HTMLDivElement, TagLabelProps>(
  (props, ref) => {
    return <Box ref={ref} as='span' {...props} />
  }
)

export const TagLeftIcon = React.forwardRef<SVGElement, IconProps>(
  (props, ref) => (
    <Icon ref={ref} verticalAlign='top' marginEnd='0.5rem' {...props} />
  )
)

export const TagRightIcon = React.forwardRef<SVGElement, IconProps>(
  (props, ref) => (
    <Icon ref={ref} verticalAlign='top' marginStart='0.5rem' {...props} />
  )
)

export interface TagCloseButtonProps extends Omit<CloseButtonProps, 'size'> {}

const BaseTagCloseButton = styled(CloseButton)<TagCloseButtonProps>`
  align-self: center;
  margin-inline-start: 0.375rem;
  margin-inline-end: -1;
  opacity: 0.5;
  border-radius: 9999px;
  color: white;

  &:focus {
    box-shadow: outline;
    background: rgba(0, 0, 0, 0.14);
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`

export const TagCloseButton = React.forwardRef<
  HTMLButtonElement,
  TagCloseButtonProps
>((props, ref) => {
  return <BaseTagCloseButton ref={ref} s='sm' {...props} />
})
