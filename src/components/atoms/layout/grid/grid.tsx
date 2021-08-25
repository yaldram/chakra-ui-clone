import * as React from 'react'
import styled from 'styled-components'
import {
  system,
  GridProps as StyledGridProps,
  ResponsiveValue,
  AlignItemsProps,
  JustifyItemsProps,
  AlignSelfProps,
  JustifySelfProps,
  JustifyContentProps,
  AlignContentProps
} from 'styled-system'

import { filterUndefined, mapResponsive } from '../../../../utils'
import { Box, BoxProps } from '../box'

type GridOmitted = 'display'

type GridOptions = {
  templateColumns?: StyledGridProps['gridTemplateColumns']
  rowGap?: StyledGridProps['gridRowGap']
  columnGap?: StyledGridProps['gridColumnGap']
  gap?: StyledGridProps['gridGap']
  autoFlow?: StyledGridProps['gridAutoFlow']
  autoRows?: StyledGridProps['gridAutoRows']
  autoColumns?: StyledGridProps['gridAutoColumns']
  templateRows?: StyledGridProps['gridTemplateRows']
  templateAreas?: StyledGridProps['gridTemplateAreas']
  area?: StyledGridProps['gridArea']
  column?: StyledGridProps['gridColumn']
  row?: StyledGridProps['gridRow']
  align?: AlignItemsProps['alignItems']
  justify?: JustifyItemsProps['justifyItems']
}

type BaseGridProps = GridOptions &
  BoxProps &
  AlignContentProps &
  JustifyContentProps

const BaseGrid = styled(Box)<BaseGridProps>`
  display: grid;
  ${system({
    templateAreas: {
      property: 'gridTemplateAreas'
    },
    templateColumns: {
      property: 'gridTemplateColumns'
    },
    templateRows: {
      property: 'gridTemplateRows'
    },
    rowGap: {
      property: 'gridRowGap',
      scale: 'space'
    },
    columnGap: {
      property: 'gridColumnGap',
      scale: 'space'
    },
    gap: {
      property: 'gridGap',
      scale: 'space'
    },
    autoFlow: {
      property: 'gridAutoFlow'
    },
    autoRows: {
      property: 'gridAutoRows'
    },
    autoColumns: {
      property: 'gridAutoColumns'
    },
    area: {
      property: 'gridArea'
    },
    column: {
      property: 'gridColumn'
    },
    row: {
      property: 'gridRow'
    },
    align: {
      property: 'alignItems'
    },
    justify: {
      property: 'justifyItems'
    },
    alignContent: true,
    justifyContent: true
  })}
`

export interface GridProps extends Omit<BaseGridProps, GridOmitted> {}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    const { children, ...delegated } = props

    return (
      <BaseGrid ref={ref} {...delegated}>
        {children}
      </BaseGrid>
    )
  }
)

type GridItemSpanValue = ResponsiveValue<number | 'auto'>

function spanFun(span?: GridItemSpanValue) {
  return mapResponsive(span, (value) => {
    if (!value) return null

    return value === 'auto' ? 'auto' : `span ${value}/span ${value}`
  })
}

type GridItemOptions = {
  colSpan?: GridItemSpanValue
  colStart?: GridItemSpanValue
  colEnd?: GridItemSpanValue
  rowStart?: GridItemSpanValue
  rowEnd?: GridItemSpanValue
  rowSpan?: GridItemSpanValue
}

type BaseGridItemProps = GridItemOptions &
  BoxProps &
  AlignSelfProps &
  JustifySelfProps

const BaseGridItem = styled(Box)<BaseGridItemProps>`
  ${system({
    colSpan: {
      property: 'gridColumn'
    },
    rowSpan: {
      property: 'gridRow'
    },
    colStart: {
      property: 'gridColumnStart'
    },
    colEnd: {
      property: 'gridColumnEnd'
    },
    rowStart: {
      property: 'gridRowStart'
    },
    rowEnd: {
      property: 'gridRowEnd'
    },
    alignSelf: true,
    justifySelf: true
  })}
`

export interface GridItemProps extends BaseGridItemProps {}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    const {
      colSpan,
      rowSpan,
      colStart,
      colEnd,
      rowStart,
      rowEnd,
      children,
      ...delegated
    } = props

    const gridItemProps = filterUndefined({
      colSpan: spanFun(colSpan),
      rowSpan: spanFun(rowSpan),
      colStart,
      colEnd,
      rowStart,
      rowEnd
    })

    return (
      <BaseGridItem ref={ref} {...gridItemProps} {...delegated}>
        {children}
      </BaseGridItem>
    )
  }
)
