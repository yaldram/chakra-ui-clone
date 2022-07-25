import * as React from 'react'

import { useBoolean } from '../../../../hooks/use-boolean'
import { useId } from '../../../../hooks/use-id'
import { createContext, dataAttr } from '../../../../utils'
import { mergeRefs } from '../../../../utils/refs'
import { Box, BoxProps } from '../../../atoms'

/* eslint-disable max-len */
export interface FormControlOptions {
  /**
   * If `true`, the form control will be required. This has 2 side effects:
   * - The `FormLabel` will show a required indicator
   * - The form element (e.g, Input) will have `aria-required` set to `true`
   */
  isRequired?: boolean
  /**
   * If `true`, the form control will be disabled. This has 2 side effects:
   * - The `FormLabel` will have `data-disabled` attribute
   * - The form element (e.g, Input) will be disabled
   */
  isDisabled?: boolean
  /**
   * If `true`, the form control will be invalid. This has 2 side effects:
   * - The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`
   * - The form element (e.g, Input) will have `aria-invalid` set to `true`
   */
  isInvalid?: boolean
  /**
   * If `true`, the form control will be readonly
   */
  isReadOnly?: boolean
}

interface FormControlContext extends FormControlOptions {
  /**
   * The label text used to inform users as to what information is
   * requested for a text field.
   */
  label?: string
  /**
   * The custom `id` to use for the form control. This is passed directly to the form element (e.g, Input).
   * - The form element (e.g. Input) gets the `id`
   * - The form label id: `form-label-${id}`
   * - The form error text id: `form-error-text-${id}`
   * - The form helper text id: `form-helper-text-${id}`
   */
  id?: string
  /**
   * htmlFor used for the label
   */
  htmlFor?: string
}

type FormControlProviderContext = Omit<
  ReturnType<typeof useFormControlProvider>,
  'getRootProps' | 'htmlProps'
>

const [FormControlProvider, useFormControlContext] =
  createContext<FormControlProviderContext>({
    strict: false,
    name: 'FormControlContext'
  })

export { useFormControlContext }

export type HTMLProps<T = any> = React.HTMLAttributes<T> &
  React.RefAttributes<T>

export type PropGetter<T extends HTMLElement = any> = (
  props?: HTMLProps<T>,
  ref?: React.Ref<any> | React.RefObject<any>
) => HTMLProps<T>

function useFormControlProvider(props: FormControlContext) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props

  // Generate all Required IdS
  const uuid = useId()
  const id = idProp || `field-${uuid}`

  const labelId = `${id}-label`
  const feedbackId = `${id}-feedback`
  const helpTextId = `${id}-helptext`

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the `aria-describedby` of the `input`.
   */
  const [hasFeedbackText, setHasFeedbackText] = React.useState(false)

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the `aria-describedby` of the `input`.
   */
  const [hasHelpText, setHasHelpText] = React.useState(false)

  // Track whether the form element (e.g, `input`) has focus.
  const [isFocused, setFocus] = useBoolean()

  const getHelpTextProps = React.useCallback<PropGetter>(
    (componentProps = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...componentProps,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return
        setHasHelpText(true)
      })
    }),
    [helpTextId]
  )

  const getLabelProps = React.useCallback<PropGetter>(
    (componentProps = {}, forwardedRef = null) => ({
      ...componentProps,
      ref: forwardedRef,
      'data-focus': dataAttr(isFocused),
      'data-disabled': dataAttr(isDisabled),
      'data-invalid': dataAttr(isInvalid),
      'data-readonly': dataAttr(isReadOnly),
      id: props.id ?? labelId,
      htmlFor: props.htmlFor ?? id
    }),
    [
      id,
      isDisabled,
      isFocused,
      isInvalid,
      isReadOnly,
      labelId,
      props.id,
      props.htmlFor
    ]
  )

  const getErrorMessageProps = React.useCallback<PropGetter>(
    (componentProps = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...componentProps,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return
        setHasFeedbackText(true)
      }),
      'aria-live': 'polite'
    }),
    [feedbackId]
  )

  const getRootProps = React.useCallback<PropGetter>(
    (componentProps = {}, forwardedRef = null) => ({
      ...componentProps,
      ...htmlProps,
      ref: forwardedRef,
      role: 'group'
    }),
    [htmlProps]
  )

  const getRequiredIndicatorProps = React.useCallback<PropGetter>(
    (componentProps = {}, forwardedRef = null) => ({
      ...componentProps,
      ref: forwardedRef,
      role: 'presentation',
      'aria-hidden': true,
      children: componentProps.children || '*'
    }),
    []
  )

  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: setFocus.on,
    onBlur: setFocus.off,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  }
}

export interface FormControlProps extends BoxProps, FormControlContext {}

/**
 * FormControl provides context such as
 * `isInvalid`, `isDisabled`, and `isRequired` to form elements.
 *
 * This is commonly used in form elements such as `input`,
 * `select`, `textarea`, etc.
 */
export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (props, ref) => {
    const {
      getRootProps,
      /**
       * htmlProps is whatever we pass to the FormControl like
       * children, bg, etc. we get this value from getRootProps(),
       * so neglect it here and gather the context
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      htmlProps: _,
      ...context
    } = useFormControlProvider(props)

    return (
      <FormControlProvider value={context}>
        <Box w='100%' position='relative' {...getRootProps({}, ref)} />
      </FormControlProvider>
    )
  }
)

export interface HelperTextProps extends BoxProps {}

export const FormHelperText = React.forwardRef<HTMLDivElement, HelperTextProps>(
  (props, ref) => {
    const field = useFormControlContext()
    return (
      <Box
        mt='0.5rem'
        color='gray500'
        lineHeight='normal'
        fontSize='sm'
        {...field.getHelpTextProps(props, ref)}
      />
    )
  }
)
