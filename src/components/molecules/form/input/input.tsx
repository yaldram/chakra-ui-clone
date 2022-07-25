import * as React from 'react'
import styled from 'styled-components'
import {
  system,
  compose,
  variant as variantFun,
  space,
  SpaceProps,
  LayoutProps,
  ColorProps,
  ResponsiveValue,
  BorderProps
} from 'styled-system'
import { AppTheme } from '../../../../theme'

import { colors } from '../../../../theme/colors'
import { useFormControl } from '../form-control'

type InputSizes = 'xs' | 'sm' | 'md' | 'lg'

type InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled'

interface InputOptions {
  /**
   * The border color when the input is focused.
   * @example
   * focusBorderColor = "blue.500"
   */
  focusBorderColor?: keyof typeof colors
  /**
   * The border color when the input is invalid
   * @example
   * errorBorderColor = "red.500"
   */
  errorBorderColor?: keyof typeof colors
  /**
   * The native HTML `size` attribute to be passed to the `input`
   */
  htmlSize?: number
  s?: ResponsiveValue<InputSizes>
  variant?: ResponsiveValue<InputVariant>
}

type InputStyledSystemProps = SpaceProps & {
  w?: LayoutProps['width']
  h?: LayoutProps['height']
  maxW?: LayoutProps['maxWidth']
  maxH?: LayoutProps['maxHeight']
  bg?: ColorProps['bg']
  backgroundColor?: ColorProps['color']
  c?: ColorProps['color']
  opacity?: ColorProps['opacity']
  paddingStart?: SpaceProps['paddingLeft']
  paddingEnd?: SpaceProps['paddingLeft']
  borderStartRadius?: BorderProps['borderTopLeftRadius']
  borderEndRadius?: BorderProps['borderTopLeftRadius']
}

export interface InputProps
  extends InputOptions,
    InputStyledSystemProps,
    Omit<
      React.ComponentPropsWithoutRef<'input'>,
      'size' | 'width' | 'color' | 'height'
    > {}

function variantSizes() {
  return {
    lg: {
      fontSize: 'lg',
      // Should use paddingInlineStart and paddingInlineEnd
      paddingLeft: 'lg',
      paddingRight: 'lg',
      height: '3rem',
      borderRadius: 'md'
    },

    md: {
      fontSize: 'md',
      px: 'md',
      height: '2.5rem',
      borderRadius: 'md'
    },

    sm: {
      fontSize: 'sm',
      px: 'sm',
      height: '2rem',
      borderRadius: 'sm'
    },

    xs: {
      fontSize: 'xs',
      px: 'xs',
      height: '1.5rem',
      borderRadius: 'sm'
    }
  }
}

function variantOutline(
  theme: AppTheme,
  focusBorderColor: string,
  errorBorderColor: string
) {
  return {
    border: '1px solid',
    borderColor: 'gray300',
    bg: 'inherit',
    '&:hover': {
      borderColor: 'gray400'
    },
    '&:read-only': {
      boxShadow: 'none !important',
      userSelect: 'all'
    },
    '&:disabled': {
      opacity: 0.4,
      cursor: 'not-allowed'
    },
    '&[aria-invalid=true]': {
      borderColor: errorBorderColor,
      boxShadow: `0 0 0 1px ${theme.colors[errorBorderColor]}`
    },
    '&:focus-visible': {
      zIndex: 1,
      borderColor: focusBorderColor,
      boxShadow: `0 0 0 1px ${theme.colors[focusBorderColor]}`
    }
  }
}

function variantFilled(focusBorderColor: string, errorBorderColor: string) {
  return {
    border: '2px solid',
    borderColor: 'transparent',
    bg: 'gray100',
    '&:hover': {
      borderColor: 'gray200'
    },
    '&:read-only': {
      boxShadow: 'none !important',
      userSelect: 'all'
    },
    '&:disabled': {
      opacity: 0.4,
      cursor: 'not-allowed'
    },
    '&[aria-invalid=true]': {
      borderColor: errorBorderColor
    },
    '&:focus-visible': {
      bg: 'transparent',
      borderColor: focusBorderColor
    }
  }
}

function variantFlushed(
  theme: AppTheme,
  focusBorderColor: string,
  errorBorderColor: string
) {
  return {
    border: 'none',
    borderBottom: '1px solid',
    borderColor: 'gray300',
    borderRadius: 0,
    px: 0,
    bg: 'transparent',
    '&:read-only': {
      boxShadow: 'none !important',
      userSelect: 'all'
    },
    '&[aria-invalid=true]': {
      borderColor: errorBorderColor,
      boxShadow: `0px 1px 0px 0px ${theme.colors[errorBorderColor]}`
    },
    '&:focus-visible': {
      borderColor: focusBorderColor,
      boxShadow: `0px 1px 0px 0px ${theme.colors[focusBorderColor]}`
    }
  }
}

function variantUnstyled() {
  return {
    border: 'none',
    bg: 'transparent',
    px: 0,
    height: 'auto',
    borderRadius: 0
  }
}

const StyledInput = styled.input.attrs((props: InputProps) => ({
  size: props.htmlSize
}))<InputProps>`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  outline: 0;
  position: relative;
  appearance: none;
  transition-duration: 200ms;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;

  ${variantFun({
    prop: 's',
    variants: variantSizes()
  })}

  ${({ theme, focusBorderColor = 'blue300', errorBorderColor = 'red300' }) =>
    variantFun({
      prop: 'variant',
      variants: {
        outline: variantOutline(theme, focusBorderColor, errorBorderColor),
        filled: variantFilled(focusBorderColor, errorBorderColor),
        flushed: variantFlushed(theme, focusBorderColor, errorBorderColor),
        unstyled: variantUnstyled()
      }
    })}

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
    bg: {
      property: 'backgroundColor'
    },
    backgroundColor: {
      property: 'backgroundColor'
    },
    c: {
      property: 'color'
    },
    opacity: {
      property: 'opacity'
    },
    borderStartRadius: {
      properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      scale: 'radii'
    },
    borderEndRadius: {
      properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
      scale: 'radii'
    },
    paddingStart: {
      property: 'paddingInlineStart',
      scale: 'space'
    },
    paddingEnd: {
      property: 'paddingInlineEnd',
      scale: 'space'
    }
  })} 
 
  ${compose(space)}
`

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { variant = 'outline', s = 'md', ...delegated } = props
    const input = useFormControl<HTMLInputElement>(delegated)

    return <StyledInput ref={ref} s={s} variant={variant} {...input} />
  }
)

// This is used in `input-group.tsx`
// @ts-expect-error: id is not available
Input.id = 'Input'
