import React from 'react'
import { system, LayoutProps, variant as variantFun } from 'styled-system'
import styled from 'styled-components'

import { FlexProps, Flex } from '../../../atoms'
import { useInputGroupContext } from './input-group'

export interface InputElementProps extends FlexProps {
  placement?: 'left' | 'right'
  w?: LayoutProps['width']
  h?: LayoutProps['height']
}

function variantSizes() {
  return {
    lg: {
      fontSize: 'lg',
      size: '3rem'
    },

    md: {
      fontSize: 'md',
      size: '2.5rem'
    },

    sm: {
      fontSize: 'sm',
      size: '2rem'
    },

    xs: {
      fontSize: 'xs',
      size: '1.5rem'
    }
  }
}

const StyledInputElement = styled(Flex)<
  InputElementProps & {
    elementSize?: keyof ReturnType<typeof variantSizes>
  }
>`
  ${variantFun({
    prop: 'elementSize',
    variants: variantSizes()
  })}

  ${system({
    /**
     * We are extending Flex which in turn
     * extends Box, and variantSizes comes after
     * all these extends so we need to extend
     * width, height again for specificity
     */
    w: {
      property: 'width'
    },
    h: {
      property: 'height'
    }
  })}
`

export const InputElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => {
    const { groupSize } = useInputGroupContext()
    const { placement = 'left', ...delegated } = props

    const elementStyles = {
      [placement]: '0'
    }

    return (
      <StyledInputElement
        align='center'
        justify='center'
        position='absolute'
        top='0'
        right='0'
        zIndex={2}
        ref={ref}
        elementSize={groupSize}
        {...elementStyles}
        {...delegated}
      />
    )
  }
)

// This is used in `input-group.tsx`
// @ts-expect-error: id is not available
InputElement.id = 'InputElement'

export const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  Omit<InputElementProps, 'placement'>
>((props, ref) => {
  return <InputElement ref={ref} placement='left' {...props} />
})

// This is used in `input-group.tsx`
// @ts-expect-error: id is not available
InputLeftElement.id = 'InputLeftElement'

export const InputRightElement = React.forwardRef<
  HTMLDivElement,
  Omit<InputElementProps, 'placement'>
>((props, ref) => {
  return <InputElement ref={ref} placement='right' {...props} />
})

// This is used in `input-group.tsx`
// @ts-expect-error: id is not available
InputRightElement.id = 'InputRightElement'
