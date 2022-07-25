import * as React from 'react'

import {
  createContext,
  filterUndefined,
  getValidChildren
} from '../../../../utils'
import { Flex } from '../../../atoms'
import { InputProps } from './input'

type InputSizes = 'xs' | 'sm' | 'md' | 'lg'

export interface InputGroupContext {
  groupSize?: InputSizes
}

export const [InputGroupProvider, useInputGroupContext] =
  createContext<InputGroupContext>({
    name: 'InputGroupContext',
    errorMessage:
      // eslint-disable-next-line max-len
      'useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<InputGroup />`'
  })

export interface InputGroupProps extends InputProps, InputGroupContext {}

const paddingMap = {
  lg: '3rem',
  md: '2.5rem',
  sm: '2rem',
  xs: '1.5rem'
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  (props, ref) => {
    const { children, groupSize = 'md', ...delegated } = props

    const groupStyles: InputGroupProps = {}

    const validChildren = getValidChildren(children)

    validChildren.forEach((child: any) => {
      if (child.type.id === 'InputLeftElement') {
        groupStyles.paddingStart = paddingMap[groupSize]
      }

      if (child.type.id === 'InputRightElement') {
        groupStyles.paddingEnd = paddingMap[groupSize]
      }

      if (child.type.id === 'InputRightAddon') {
        groupStyles.borderEndRadius = 0
      }

      if (child.type.id === 'InputLeftAddon') {
        groupStyles.borderStartRadius = 0
      }
    })

    const clones = validChildren.map((child: any) => {
      if (child.type.id === 'Input') {
        const theming = filterUndefined({
          s: child.props?.s || props.groupSize,
          variant: child.props?.variant || props.variant
        })

        return React.cloneElement(
          child,
          Object.assign(theming, groupStyles, child.props)
        )
      }

      /**
       * To the input addons we don't use size there
       * To the input elements we pass size using context
       */
      return React.cloneElement(child)
    })

    return (
      <InputGroupProvider value={{ groupSize }}>
        <Flex ref={ref} w='100%' position='relative' {...delegated}>
          {clones}
        </Flex>
      </InputGroupProvider>
    )
  }
)
