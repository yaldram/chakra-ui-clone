import * as React from 'react'

import { Box, BoxProps } from '../layout'

const fallbackIcon = {
  path: (
    <g stroke='currentColor' strokeWidth='1.5'>
      <path
        strokeLinecap='round'
        fill='none'
        d='M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'
      />
      <path
        fill='currentColor'
        strokeLinecap='round'
        d='M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'
      />
      <circle fill='none' strokeMiterlimit='10' cx='12' cy='12' r='11.25' />
    </g>
  ),
  viewBox: '0 0 24 24'
}

export interface IconProps
  extends BoxProps,
    Omit<React.SVGAttributes<SVGElement>, keyof BoxProps> {}

export const Icon = React.forwardRef<SVGElement, IconProps>((props, ref) => {
  const {
    as: element,
    viewBox = fallbackIcon.viewBox,
    color = 'currentColor',
    focusable = false,
    children,
    ...delegated
  } = props

  const sharedProps = {
    width: '1em',
    height: '1em',
    display: 'inline-block',
    lineHeight: '1em',
    flexShrink: 0,
    color,
    viewBox,
    focusable
  }

  if (element && typeof element !== 'string') {
    return <Box ref={ref} as={element} {...sharedProps} {...delegated} />
  }

  const path = (children ?? fallbackIcon.path) as React.ReactNode

  return (
    <Box
      // @ts-expect-error: Box expects ref of type HtmlDivElement
      ref={ref}
      as='svg'
      verticalAlign='middle'
      {...sharedProps}
      {...delegated}
    >
      {path}
    </Box>
  )
})
