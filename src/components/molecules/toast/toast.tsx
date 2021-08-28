import * as React from 'react'
import ReachAlert from '@reach/alert'
import { motion, useIsPresent, Variants } from 'framer-motion'

import { isFunction } from '../../../utils'
import { useTimeout, useUpdateEffect } from '../../../hooks'
import { ToastOptions } from './toast.types'
import { getToastStyle } from './toast.utils'

const toastMotionVariants: Variants = {
  initial: (props) => {
    const { position } = props

    const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x'

    let factor = ['top-right', 'bottom-right'].includes(position) ? 1 : -1
    if (position === 'bottom') factor = 1

    return {
      opacity: 0,
      [dir]: factor * 24
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}

export interface ToastProps extends ToastOptions {}

export const Toast: React.FC<ToastProps> = (props) => {
  const {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position = 'bottom',
    duration = 5000
  } = props

  const [delay, setDelay] = React.useState(duration)

  const isPresent = useIsPresent()

  useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete?.()
    }
  }, [isPresent])

  useUpdateEffect(() => {
    setDelay(duration)
  }, [duration])

  const onMouseEnter = () => setDelay(null)
  const onMouseLeave = () => setDelay(duration)

  const close = () => {
    if (isPresent) onRequestRemove()
  }

  React.useEffect(() => {
    if (isPresent && requestClose) {
      onRequestRemove()
    }
  }, [isPresent, requestClose, onRequestRemove])

  useTimeout(close, delay)

  const style = React.useMemo(() => getToastStyle(position), [position])

  return (
    <motion.li
      layout
      className='chakra-toast'
      variants={toastMotionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
      custom={{ position }}
      style={style}
    >
      <ReachAlert
        style={{
          pointerEvents: 'auto',
          maxWidth: 560,
          minWidth: 300,
          margin: '0.5rem'
        }}
      >
        {isFunction(message) ? message({ id, onClose: close }) : message}
      </ReachAlert>
    </motion.li>
  )
}
