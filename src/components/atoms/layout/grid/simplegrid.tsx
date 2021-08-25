import * as React from 'react'
import { ResponsiveValue } from 'styled-system'
import { isNumber, isNull, mapResponsive } from '../../../../utils'

import { Grid, GridProps } from './grid'

function toPx(value: string | number) {
  return isNumber(value) ? `${value}px` : value
}

function widthToColumns(width: any) {
  return mapResponsive(width, (value) =>
    isNull(value) ? null : `repeat(auto-fit, minmax(${toPx(value)}, 1fr))`
  )
}

function countToColumns(count: any) {
  return mapResponsive(count, (value) =>
    isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`
  )
}

export interface SimpleGridOptions {
  minChildWidth?: GridProps['minWidth']
  columns?: ResponsiveValue<number>
  spacing?: GridProps['gap']
  spacingX?: GridProps['gap']
  spacingY?: GridProps['gap']
}

export interface SimpleGridProps extends GridProps, SimpleGridOptions {}

export const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  (props, ref) => {
    const {
      columns,
      spacingX,
      spacingY,
      spacing,
      minChildWidth,
      ...delegated
    } = props

    const templateColumns = minChildWidth
      ? widthToColumns(minChildWidth)
      : countToColumns(columns)

    return (
      <Grid
        ref={ref}
        gap={spacing}
        columnGap={spacingX}
        rowGap={spacingY}
        templateColumns={templateColumns}
        {...delegated}
      />
    )
  }
)
