import type { ReactNode } from 'react'
import { useTheme } from '../styles'

export interface LoadingIndicatorProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  color?: string
  dotCount?: number
  label?: string
}

const sizeMap = {
  small: '0.5rem',
  medium: '0.75rem',
  large: '1rem',
} as const

export function LoadingIndicator({
  className = '',
  size = 'medium',
  color,
  dotCount = 3,
  label,
}: LoadingIndicatorProps) {
  const { tokens } = useTheme()
  const dotSize = sizeMap[size]
  const dotColor = color || tokens.colors.neutral.gray

  return (
    <div className={className} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: tokens.spacing.sm }}>
      <div className="loading-indicator" style={{ gap: tokens.spacing.sm }}>
        {Array.from({ length: dotCount }, (_, index) => (
          <span
            key={index}
            className="loading-dot"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: dotColor,
              animationDelay: `${index * 0.15}s`,
            }}
          />
        ))}
      </div>
      {label ? (
        <span style={{ color: tokens.colors.neutral.dark, fontSize: tokens.typography.fontSize.sm }}>
          {label}
        </span>
      ) : null}
    </div>
  )
}
