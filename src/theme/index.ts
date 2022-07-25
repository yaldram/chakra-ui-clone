import { colors } from './colors'
import { spacing } from './spacing'
import { typography } from './typography'
import { radii } from './radii'

export const defaultTheme = {
  breakpoints: ['450px', '600px', '960px', '1280px', '1920px'],

  fontSizes: typography.fontSizes,
  fonts: typography.fonts,
  fontWeights: typography.fontWeights,

  letterSpacings: typography.letterSpacings,
  lineHeights: typography.lineHeights,

  colors,
  radii,

  space: spacing
}

export type AppTheme = typeof defaultTheme
