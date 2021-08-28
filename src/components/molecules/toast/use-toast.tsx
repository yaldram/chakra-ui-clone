import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../theme'
import { isFunction } from '../../../utils'
import { CloseButton } from '../../atoms/form'
import { RenderProps, ToastId, ToastOptions } from './toast.types'
import { toast } from './toast.class'
import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertStatus,
  AlertTitle,
  AlertVariants
} from '../alert'

export interface UseToastOptions {
  /**
   * The placement of the toast
   *
   * @default "bottom"
   */
  position?: ToastOptions['position']
  /**
   * The delay before the toast hides (in milliseconds)
   * If set to `null`, toast will never dismiss.
   *
   * @default 5000 ( = 5000ms )
   */
  duration?: ToastOptions['duration']
  /**
   * Render a component toast component.
   * Any component passed will receive 2 props: `id` and `onClose`.
   */
  render?(props: RenderProps): React.ReactNode
  /**
   * The title of the toast
   */
  title?: React.ReactNode
  /**
   * The description of the toast
   */
  description?: React.ReactNode
  /**
   * If `true`, toast will show a close button
   */
  isClosable?: boolean
  /**
   * The alert component `variant` to use
   */
  variant?: AlertVariants
  /**
   * The status of the toast.
   */
  status?: AlertStatus
  /**
   * The `id` of the toast.
   *
   * Mostly used when you need to prevent duplicate.
   * By default, we generate a unique `id` for each toast
   */
  id?: ToastId
  /**
   * Callback function to run side effects after the toast has closed.
   */
  onCloseComplete?: () => void
}

export type IToast = UseToastOptions

const Toast: React.FC<any> = (props) => {
  const { status, variant, title, isClosable, onClose, description } = props

  return (
    <Alert
      status={status}
      variant={variant}
      align='start'
      borderRadius='0.375rem'
      boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05)'
      textAlign='start'
      width='auto'
      style={{
        paddingInlineStart: '1rem',
        paddingInlineEnd: '2rem'
      }}
    >
      <AlertIcon />
      <div style={{ flex: '1' }}>
        {title && <AlertTitle fontWeight='600'>{title}</AlertTitle>}
        {description && (
          <AlertDescription display='block'>{description}</AlertDescription>
        )}
      </div>
      {isClosable && (
        <CloseButton
          s='sm'
          onClick={onClose}
          position='absolute'
          top='0.25rem'
          right='0.25rem'
          color='white'
        />
      )}
    </Alert>
  )
}

const defaults = {
  duration: 5000,
  position: 'bottom',
  variant: 'solid'
}

export const defaultStandaloneParam = {
  theme: defaultTheme,
  defaultOptions: defaults
}

/**
 * Create a toast from outside of React Components
 */
export function createStandaloneToast({
  theme = defaultStandaloneParam.theme,
  defaultOptions = defaultStandaloneParam.defaultOptions
}: any = defaultStandaloneParam) {
  const renderWithProviders = (
    props: React.PropsWithChildren<RenderProps>,
    options: UseToastOptions
  ) => (
    <ThemeProvider theme={theme}>
      {isFunction(options.render) ? (
        options.render(props)
      ) : (
        <Toast {...props} {...options} />
      )}
    </ThemeProvider>
  )

  const toastImpl = (options?: UseToastOptions) => {
    const opts = { ...defaultOptions, ...options }

    const Message: React.FC<RenderProps> = (props) =>
      renderWithProviders(props, opts)

    return toast.notify(Message, opts)
  }

  toastImpl.close = toast.close
  toastImpl.closeAll = toast.closeAll

  // toasts can only be updated if they have a valid id
  toastImpl.update = (id: ToastId, options: Omit<UseToastOptions, 'id'>) => {
    if (!id) return

    const opts = { ...defaultOptions, ...options }

    toast.update(id, {
      ...opts,
      message: (props) => renderWithProviders(props, opts)
    })
  }

  toastImpl.isActive = toast.isActive

  return toastImpl
}

/**
 * React hook used to create a function that can be used
 * to show toasts in an application.
 */
export function useToast(options?: UseToastOptions) {
  return React.useMemo(
    () =>
      createStandaloneToast({
        theme: defaultTheme,
        defaultOptions: options
      }),
    [options]
  )
}
