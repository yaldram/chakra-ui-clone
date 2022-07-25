import * as React from 'react'

import { spacingOptions } from '../../../../theme/spacing'
import { Grid, GridItem, GridProps } from './grid'
import { SimpleGrid, SimpleGridProps } from './simplegrid'

export default {
  title: 'Atoms/Layout/Grid'
}

export const simpleGrid = {
  args: {
    minChildWidth: '170px',
    spacingY: 'md',
    spacingX: 'lg'
  },
  argTypes: {
    minChildWidth: {
      name: 'minChildWidth',
      type: { name: 'string', required: false },
      description: `The width at which child elements will
      break into columns. Pass a number for pixel values
      or a string for any other valid CSS length.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    spacingY: {
      name: 'spacingY',
      type: { name: 'string', required: false },
      ...spacingOptions(),
      description: 'The column gap between the grid items.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'select'
      }
    },
    spacingX: {
      name: 'spacingX',
      type: { name: 'string', required: false },
      ...spacingOptions(),
      description: 'The row gap between the grid items.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'select'
      }
    }
  },
  render: (args: SimpleGridProps) => (
    <SimpleGrid {...args}>
      <GridItem bg='tomato' height='80px' />
      <GridItem bg='tomato' height='80px' />
      <GridItem bg='tomato' height='80px' />
      <GridItem bg='tomato' height='80px' />
      <GridItem bg='tomato' height='80px' />
      <GridItem bg='tomato' height='80px' />
    </SimpleGrid>
  )
}

export const Default = {
  render: (args: GridProps) => (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap='md'
      {...args}
    >
      <GridItem rowSpan={2} colSpan={1} bg='tomato' />
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={4} bg='tomato' />
    </Grid>
  )
}
