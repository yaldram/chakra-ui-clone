import * as React from 'react'
import styled, { CSSProperties } from 'styled-components'
import {
  compose,
  display,
  space,
  typography,
  color,
  borderRadius,
  layout,
  system,
  DisplayProps,
  SpaceProps,
  TypographyProps,
  ColorProps,
  BorderRadiusProps,
  LayoutProps,
  ResponsiveValue
} from 'styled-system'

interface TextOptions {
  isTruncated?: boolean
  noOfLines?: number
  whiteSpace?: ResponsiveValue<CSSProperties['whiteSpace']>
  textOverflow?: ResponsiveValue<CSSProperties['textOverflow']>
  decoration?: ResponsiveValue<CSSProperties['textDecoration']>
  transform?: ResponsiveValue<CSSProperties['textTransform']>
}

export type TextProps = DisplayProps &
  SpaceProps &
  TypographyProps &
  ColorProps &
  BorderRadiusProps &
  LayoutProps &
  React.ComponentPropsWithoutRef<'p'> &
  TextOptions & {
    as?: React.ElementType
    children?: React.ReactNode
  }

const BaseText = styled.p<TextProps>`
  ${compose(space, display, typography, color, borderRadius, layout)}
  ${system({
    whiteSpace: true,
    textOverflow: true,
    decoration: {
      property: 'textDecoration'
    },
    transform: {
      property: 'textTransform'
    }
  })}
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

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    const { children, isTruncated, ...delegated } = props

    const truncatedProps = isTruncated
      ? {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }
      : {}

    return (
      <BaseText ref={ref} {...truncatedProps} {...delegated}>
        {children}
      </BaseText>
    )
  }
)

export const VisuallyHiddenText = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`
