import * as React from 'react'
import styled from 'styled-components'

import { Box, BoxProps } from '../../../atoms'
import { useFormControlContext } from './form-control'

export interface RequiredIndicatorProps extends BoxProps {}

/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const RequiredIndicator = React.forwardRef<
  HTMLDivElement,
  RequiredIndicatorProps
>((props, ref) => {
  const field = useFormControlContext()

  if (!field?.isRequired) return null

  return (
    <Box
      display='inline-block'
      marginStart='0.25rem'
      color='red500'
      {...field?.getRequiredIndicatorProps(props, ref)}
      {...props}
    />
  )
})

export interface FormLabelProps extends BoxProps {
  /**
   * @type React.ReactElement
   */
  requiredIndicator?: React.ReactElement
  /**
   * @type React.ReactNode
   */
  optionalIndicator?: React.ReactNode
}

const FormLabelElement = styled(Box)`
  display: block;
  text-align: start;
  font-size: 1rem;
  margin-inline-end: 0.75rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 200ms;
  opacity: 1;

  &:disabled {
    opacity: 0.4;
  }
`

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * Accessibility: Every form field should have a form label.
 */
export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => {
    const {
      children,
      requiredIndicator = <RequiredIndicator />,
      optionalIndicator = null,
      ...delegated
    } = props

    const field = useFormControlContext()
    const ownProps = field?.getLabelProps(delegated, ref) ?? {
      ref,
      ...delegated
    }

    return (
      <FormLabelElement as='label' {...ownProps}>
        {children}
        {field?.isRequired ? requiredIndicator : optionalIndicator}
      </FormLabelElement>
    )
  }
)
