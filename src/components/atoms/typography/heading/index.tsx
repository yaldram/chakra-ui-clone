import * as React from 'react'
import styled, { CSSProperties } from 'styled-components'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  compose,
  display,
  space,
  typography,
  color,
  colorStyle,
  borderRadius,
  layout,
  system,
  variant as variantFun,
  DisplayProps,
  SpaceProps,
  TypographyProps,
  ColorProps,
  ColorStyleProps,
  BorderRadiusProps,
  LayoutProps,
  ResponsiveValue
} from 'styled-system'

type VariantSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '3xl' | '4xl'

interface TextOptions {
  isTruncated?: boolean
  noOfLines?: number
  variant?: ResponsiveValue<VariantSize>
  whiteSpace?: ResponsiveValue<CSSProperties['whiteSpace']>
  textOverflow?: ResponsiveValue<CSSProperties['textOverflow']>
  decoration?: ResponsiveValue<CSSProperties['textDecoration']>
  transform?: ResponsiveValue<CSSProperties['textTransform']>
}

export type HeadingProps = DisplayProps &
  SpaceProps &
  TypographyProps &
  ColorProps &
  ColorStyleProps &
  BorderRadiusProps &
  LayoutProps &
  React.ComponentPropsWithoutRef<'h2'> &
  TextOptions & {
    as?: React.ElementType
    children?: React.ReactNode
  }

const BaseHeading = styled.h2.withConfig({
  shouldForwardProp
})<HeadingProps>`
  ${variantFun({
    prop: 'variant',
    variants: {
      '4xl': {
        fontSize: ['6xl', null, '7xl'],
        lineHeight: 'none'
      },
      '3xl': {
        fontSize: ['5xl', null, '6xl'],
        lineHeight: 'none'
      },
      '2xl': {
        fontSize: ['4xl', null, '5xl'],
        lineHeight: ['shorter', null, 'none']
      },
      xl: {
        fontSize: ['3xl', null, '4xl'],
        lineHeight: ['short', null, 'shorter']
      },
      lg: {
        fontSize: ['2xl', null, '3xl'],
        lineHeight: ['short', null, 'shorter']
      },
      md: { fontSize: 'xl', lineHeight: 'shorter' },
      sm: { fontSize: 'md', lineHeight: 'shorter' },
      xs: { fontSize: 'sm', lineHeight: 'shorter' }
    }
  })}
  ${compose(
    space,
    display,
    typography,
    color,
    colorStyle,
    borderRadius,
    layout,
    system({
      whiteSpace: true,
      textOverflow: true,
      decoration: {
        property: 'textDecoration'
      },
      transform: {
        property: 'textTransform'
      }
    })
  )}
  ${({ noOfLines }) =>
    noOfLines &&
    `
    display: -webkit-box;
    line-clamp: ${noOfLines};
    overflow: hidden;
    -webkit-line-clamp: ${noOfLines};
    -webkit-box-orient: vertical;
  `};
`

export const Heading = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  (props, ref) => {
    const { children, variant = 'md', isTruncated, ...delegated } = props

    const truncatedProps = isTruncated
      ? {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }
      : {}

    return (
      <BaseHeading
        ref={ref}
        variant={variant}
        {...truncatedProps}
        {...delegated}
      >
        {children}
      </BaseHeading>
    )
  }
)
