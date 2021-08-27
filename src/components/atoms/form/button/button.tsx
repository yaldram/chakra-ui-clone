import * as React from 'react'
import styled from 'styled-components'
import {
  compose,
  variant as variantFun,
  color,
  border,
  layout,
  space,
  fontSize,
  ResponsiveValue,
  SpaceProps,
  ColorProps,
  BorderProps,
  FontSizeProps,
  LayoutProps
} from 'styled-system'

import { ColorScheme as ButtonColorScheme } from '../../../../theme/colors'
import { ButtonSpinner } from './button-spinner'
import { ButtonIcon } from './button-icon'

type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg'

type ButtonVariants = 'link' | 'outline' | 'solid' | 'ghost' | 'unstyled'

interface ButtonOptions {
  colorScheme?: ButtonColorScheme
  s?: ResponsiveValue<ButtonSizes>
  variant?: ResponsiveValue<ButtonVariants>

  isLoading?: boolean
  isActive?: boolean
  isDisabled?: boolean
  isFullWidth?: boolean

  loadingText?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  iconSpacing?: SpaceProps['marginRight']

  spinner?: React.ReactElement
  spinnerPlacement?: 'start' | 'end'
}

export type ButtonProps = ColorProps &
  BorderProps &
  FontSizeProps &
  LayoutProps &
  ButtonOptions &
  SpaceProps &
  React.ComponentPropsWithoutRef<'button'> & { children?: React.ReactNode }

function variantGhost(colorScheme: ButtonColorScheme) {
  if (colorScheme === 'gray') {
    return {
      color: 'inherit',
      '&:hover': {
        bg: 'gray100'
      },
      '&:active': {
        bg: 'gray200'
      }
    }
  }

  return {
    color: `${colorScheme}600`,
    bg: 'transparent',
    '&:hover': {
      bg: `${colorScheme}50`
    },
    '&:active': {
      bg: `${colorScheme}100`
    }
  }
}

function variantOutline(colorScheme: ButtonColorScheme) {
  return {
    border: '1px solid',
    borderColor: colorScheme === 'gray' ? 'gray200' : 'currentColor',
    ...variantGhost(colorScheme)
  }
}

function variantSolid(colorScheme: ButtonColorScheme) {
  const accessibleColorMap = {
    yellow: {
      background: 'yellow400',
      componentColor: 'black',
      hoverBg: 'yellow500',
      activeBg: 'yellow600'
    },
    cyan: {
      background: 'cyan400',
      componentColor: 'black',
      hoverBg: 'cyan500',
      activeBg: 'cyan600'
    }
  }

  if (colorScheme === 'gray') {
    return {
      bg: 'gray100',
      '&:hover': {
        bg: 'gray200',
        '&:disabled': { bg: 'gray100' }
      },
      '&:active': { bg: 'gray300' }
    }
  }

  const {
    background = `${colorScheme}500`,
    componentColor = 'white',
    hoverBg = `${colorScheme}600`,
    activeBg = `${colorScheme}700`
  } = accessibleColorMap[colorScheme] || {}

  return {
    bg: background,
    color: componentColor,
    '&:hover': {
      bg: hoverBg,
      '&:disabled': { bg: background }
    },
    '&:active': { bg: activeBg }
  }
}

function variantLink(colorScheme: ButtonColorScheme) {
  return {
    padding: 0,
    background: 'none',
    height: 'auto',
    lineHeight: 'normal',
    verticalAlign: 'baseline',
    color: `${colorScheme}500`,
    '&:hover': {
      textDecoration: 'underline',
      '&:disabled': {
        textDecoration: 'none'
      }
    },
    '&:active': {
      color: `${colorScheme}700`
    }
  }
}

function variantUnStyled() {
  return {
    background: 'none',
    color: 'inherit',
    display: 'inline',
    lineHeight: 'inherit',
    margin: 0,
    p: 0
  }
}

function variantSizes() {
  return {
    lg: {
      height: '3rem',
      minWidth: '3rem',
      fontSize: 'lg',
      paddingLeft: 'lg',
      paddingRight: 'lg'
    },
    md: {
      height: '2.5rem',
      minWidth: '2.5rem',
      fontSize: 'md',
      paddingLeft: 'md',
      paddingRight: 'md'
    },
    sm: {
      height: '2rem',
      minWidth: '2rem',
      fontSize: 'sm',
      paddingLeft: 'sm',
      paddingRight: 'sm'
    },
    xs: {
      height: '1.5rem',
      minWidth: '1.5rem',
      fontSize: 'xs',
      paddingLeft: 'xs',
      paddingRight: 'xs'
    }
  }
}

const BaseButton = styled.button<ButtonProps>`
  border: none;
  outline: none;
  font-family: inherit;
  padding: 0;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  padding: 0.25em 0.75em;
  font-weight: 500;

  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;

  border-radius: 0.375rem;

  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};

  &:hover {
    &:disabled {
      background: initial;
    }
  }

  &:focus {
    box-shadow: outline;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }

  ${({ colorScheme = 'gray' }) =>
    variantFun({
      prop: 'variant',
      variants: {
        link: variantLink(colorScheme),
        outline: variantOutline(colorScheme),
        solid: variantSolid(colorScheme),
        ghost: variantGhost(colorScheme),
        unstyled: variantUnStyled()
      }
    })}

  ${variantFun({
    prop: 's',
    variants: variantSizes()
  })}


  ${compose(color, border, layout, space, fontSize)}
`

type ButtonContentProps = Pick<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'children' | 'iconSpacing'
>

function ButtonContent(props: ButtonContentProps) {
  const { leftIcon, rightIcon, children, iconSpacing } = props
  return (
    <React.Fragment>
      {leftIcon && <ButtonIcon mr={iconSpacing}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon ml={iconSpacing}>{rightIcon}</ButtonIcon>}
    </React.Fragment>
  )
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      colorScheme = 'gray',
      variant = 'solid',
      s = 'md',
      loadingText,
      isLoading = false,
      isDisabled = false,

      spinnerPlacement = 'start',
      spinner,

      rightIcon,
      leftIcon,
      iconSpacing = '0.5rem',

      ...delegated
    } = props

    const contentProps = { rightIcon, leftIcon, iconSpacing, children }

    return (
      <BaseButton
        ref={ref}
        disabled={isDisabled || isLoading}
        colorScheme={colorScheme}
        variant={variant}
        s={s}
        {...delegated}
      >
        {isLoading && spinnerPlacement === 'start' && (
          <ButtonSpinner label={loadingText} placement='start'>
            {spinner}
          </ButtonSpinner>
        )}

        {isLoading ? (
          loadingText || (
            <span style={{ opacity: 0 }}>
              <ButtonContent {...contentProps} />
            </span>
          )
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {isLoading && spinnerPlacement === 'end' && (
          <ButtonSpinner label={loadingText} placement='end'>
            {spinner}
          </ButtonSpinner>
        )}
      </BaseButton>
    )
  }
)
