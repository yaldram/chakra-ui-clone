import styled from 'styled-components'
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
import shouldForwardProp from '@styled-system/should-forward-prop'

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
    }
  })}
`
