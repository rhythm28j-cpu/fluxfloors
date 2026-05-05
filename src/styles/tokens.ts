// Global Design Tokens
import { borders } from './borders'
import { colors } from './colors'
import { spacing } from './spacing'
import { typography } from './typography'

export const tokens = {
  colors,
  spacing,
  borders,
  typography,
} as const

export type DesignTokens = typeof tokens
