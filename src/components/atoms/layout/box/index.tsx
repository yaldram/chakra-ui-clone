import styled from 'styled-components'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  system,
  compose,
  space,
  layout,
  typography,
  color,
  shadow,
  flex,
  justifySelf,
  alignSelf,
  position,
  border,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  ShadowProps,
  FlexProps,
  JustifySelfProps,
  FlexBasisProps,
  FlexShrinkProps,
  FlexGrowProps,
  AlignSelfProps,
  PositionProps,
  BorderProps
} from 'styled-system'
import { CSSProperties } from 'react'

type BoxOptions = {
  w?: LayoutProps['width']
  h?: LayoutProps['height']
  maxW?: LayoutProps['maxWidth']
  maxH?: LayoutProps['maxHeight']
  basis?: FlexBasisProps['flexBasis']
  grow?: FlexGrowProps['flexGrow']
  shrink?: FlexShrinkProps['flexShrink']
  marginStart?: SpaceProps['marginLeft']
  marginEnd?: SpaceProps['marginLeft']
  paddingStart?: SpaceProps['paddingLeft']
  paddingEnd?: SpaceProps['paddingLeft']
  borderStartRadius?: BorderProps['borderTopLeftRadius']
  borderEndRadius?: BorderProps['borderTopLeftRadius']
  pointerEvents?: CSSProperties['pointerEvents']
}

export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  ShadowProps &
  FlexProps &
  JustifySelfProps &
  AlignSelfProps &
  PositionProps &
  BorderProps &
  BoxOptions &
  React.ComponentPropsWithoutRef<'div'> & {
    as?: React.ElementType
  }

export const Box = styled.div.withConfig({
  shouldForwardProp
})<BoxProps>`
  box-sizing: border-box;
  ${compose(
    space,
    layout,
    typography,
    color,
    shadow,
    flex,
    justifySelf,
    alignSelf,
    position,
    border
  )}
  ${system({
    w: {
      property: 'width'
    },
    h: {
      property: 'height'
    },
    maxW: {
      property: 'maxWidth'
    },
    maxH: {
      property: 'maxHeight'
    },
    basis: {
      property: 'flexBasis'
    },
    grow: {
      property: 'flexGrow'
    },
    shrink: {
      property: 'flexShrink'
    },
    marginStart: {
      property: 'marginInlineStart',
      scale: 'space'
    },
    marginEnd: {
      property: 'marginInlineEnd',
      scale: 'space'
    },
    paddingStart: {
      property: 'paddingInlineStart',
      scale: 'space'
    },
    paddingEnd: {
      property: 'paddingInlineEnd',
      scale: 'space'
    },
    borderStartRadius: {
      properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      scale: 'radii'
    },
    borderEndRadius: {
      properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
      scale: 'radii'
    },
    pointerEvents: {
      property: 'pointerEvents'
    }
  })}
`
