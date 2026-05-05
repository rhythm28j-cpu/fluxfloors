import type { ReactNode } from 'react'

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
  const style = {
    fontSize:
      size === 'small' ? '0.85rem' : size === 'large' ? '1.25rem' : '1rem',
    fontWeight: weight === 'bold' ? 700 : 400,
    color,
  } as const

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  )
}
