import * as React from 'react'
import styled from 'styled-components'
import { variant as variantFun } from 'styled-system'
import { ColorScheme } from '../../../theme/colors'

import { createContext } from '../../../utils'
import { CheckIcon, InfoIcon, WarningIcon } from '../../atoms/icons'
import { Box, Flex, BoxProps, FlexProps } from '../../atoms/layout'

const STATUSES = {
  info: { icon: InfoIcon, colorScheme: 'blue' },
  warning: { icon: WarningIcon, colorScheme: 'orange' },
  success: { icon: CheckIcon, colorScheme: 'green' },
  error: { icon: WarningIcon, colorScheme: 'red' }
}

export type AlertStatus = keyof typeof STATUSES

export type AlertVariants = 'subtle' | 'left-accent' | 'top-accent' | 'solid'

interface AlertContext {
  status: AlertStatus
  variant: AlertVariants
  colorScheme: ColorScheme
}

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: 'AlertContext',
  errorMessage:
    // eslint-disable-next-line max-len
    'useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`'
})

interface AlertOptions {
  /**
   * The status of the alert
   */
  status?: AlertStatus
}

export interface AlertProps
  extends Omit<FlexProps, 'bg' | 'backgroundColor'>,
    AlertOptions {
  colorScheme?: ColorScheme
  variant?: AlertVariants
}

const alertVariants = (colorScheme: ColorScheme) => {
  const backgroundColor = `${colorScheme}100`
  const borderColor = `${colorScheme}500`

  return {
    subtle: {
      backgroundColor
    },
    solid: {
      backgroundColor: borderColor,
      color: 'white'
    },
    'left-accent': {
      paddingStart: 'md',
      borderLeftWidth: '4px',
      borderLeftStyle: 'solid',
      borderLeftColor: borderColor,
      backgroundColor
    },
    'top-accent': {
      paddingTop: 'md',
      borderTopWidth: '4px',
      borderTopStyle: 'solid',
      borderTopColor: borderColor,
      backgroundColor
    }
  }
}

const AlertContainer = styled(Flex)<AlertProps>`
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({ colorScheme = 'gray' }) =>
    variantFun({
      prop: 'variant',
      variants: alertVariants(colorScheme)
    })}
`

/**
 * Alert is used to communicate the state or status of a
 * page, feature or action
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const {
      status = 'info',
      variant = 'subtle',
      align = 'center',
      ...delegated
    } = props
    const colorScheme =
      props.colorScheme ?? (STATUSES[status].colorScheme as ColorScheme)

    return (
      <AlertProvider value={{ status, variant, colorScheme }}>
        <AlertContainer
          role='alert'
          ref={ref}
          variant={variant}
          p='sm'
          align={align}
          colorScheme={colorScheme}
          {...delegated}
        />
      </AlertProvider>
    )
  }
)

export interface AlertTitleProps extends BoxProps {}

export const AlertTitle = React.forwardRef<HTMLDivElement, AlertTitleProps>(
  (props, ref) => {
    const { children, ...delegated } = props

    return (
      <Box ref={ref} fontWeight='bold' lineHeight='tall' {...delegated}>
        {children}
      </Box>
    )
  }
)

export interface AlertDescriptionProps extends BoxProps {}

export const AlertDescription = React.forwardRef<
  HTMLDivElement,
  AlertDescriptionProps
>((props, ref) => {
  return <Box ref={ref} display='inline' lineHeight='taller' {...props} />
})

const alertIconVariants = (colorScheme: ColorScheme) => {
  const color = `${colorScheme}500`

  return {
    subtle: {
      color
    },
    solid: {
      color: 'white'
    },
    'left-accent': {
      color
    },
    'top-accent': {
      color
    }
  }
}

const AlertIconContainer = styled(Box)<AlertProps>`
  display: inherit;

  ${({ colorScheme = 'gray' }) =>
    variantFun({
      prop: 'variant',
      variants: alertIconVariants(colorScheme)
    })}
`

export interface AlertIconProps extends BoxProps {}

export const AlertIcon: React.FC<AlertIconProps> = (props) => {
  const { status, variant, colorScheme } = useAlertContext()
  const { colorScheme: statusColorScheme, icon: BaseIcon } = STATUSES[status]

  const iconColorScheme = colorScheme ?? statusColorScheme

  return (
    <AlertIconContainer
      as='span'
      variant={variant}
      colorScheme={iconColorScheme}
      flexShrink='0'
      marginEnd='sm'
      width='1.25rem'
      height='1.5rem'
      {...props}
    >
      <BaseIcon width='100%' height='100%' />
    </AlertIconContainer>
  )
}
