import schema from '../schema/Text.schema.json'
import type { ReactNode } from 'react'
import { useTheme } from '../styles'

export interface TextProps {
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'bold'
  color?: string
}

export function Text({
  as: Component = 'span',
  children,
  className = '',
  size = 'medium',
  weight = 'normal',
  color,
}: TextProps) {
  const { tokens } = useTheme()

  const fontSizeMap = {
    small: tokens.typography.fontSize.sm,
    medium: tokens.typography.fontSize.base,
    large: tokens.typography.fontSize.lg,
  }

  const fontWeightMap = {
    normal: tokens.typography.fontWeight.normal,
    bold: tokens.typography.fontWeight.bold,
  }

  const style = {
    fontSize: fontSizeMap[size],
    fontWeight: fontWeightMap[weight],
    color: color || tokens.colors.neutral.dark,
  } as const

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  )
}

export const TextSchema = schema;
