import * as React from 'react'

import { Box, BoxProps } from '../../../atoms'

type Placement = 'left' | 'right'

const placements = {
  left: {
    marginEnd: '-1px',
    borderEndRadius: 0,
    borderEndColor: 'transparent'
  },
  right: {
    marginStart: '-1px',
    borderStartRadius: 0,
    borderStartColor: 'transparent'
  }
}

export interface InputAddonProps extends BoxProps {
  placement?: Placement
}

export const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
  (props, ref) => {
    const { placement = 'left', ...delegated } = props
    const placementStyles = placements[placement] ?? {}

    return <Box ref={ref} {...delegated} {...placementStyles} />
  }
)

/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */
export const InputLeftAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
  (props, ref) => <InputAddon ref={ref} placement='left' {...props} />
)

// This is used in `input-group.tsx`
// @ts-expect-error: id is not available
InputLeftAddon.id = 'InputLeftAddon'

/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */
export const InputRightAddon = React.forwardRef<
  HTMLDivElement,
  InputAddonProps
>((props, ref) => <InputAddon ref={ref} placement='right' {...props} />)

// This is used in `input-group.tsx`
// @ts-expect-error: id is not available
InputRightAddon.id = 'InputRightAddon'
