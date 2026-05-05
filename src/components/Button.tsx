import schema from '../schema/Button.schema.json'
import type { MouseEventHandler, ReactNode } from 'react'
import { useTheme } from '../styles'

export interface ButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  variant = 'primary',
}: ButtonProps) {
  const { tokens } = useTheme()
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  const getButtonStyles = () => {
    const baseStyles = {
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      borderRadius: tokens.borders.radius.md,
      fontWeight: tokens.typography.fontWeight.medium,
      border: `${tokens.borders.base} transparent`,
    }

    if (disabled) {
      return {
        ...baseStyles,
        backgroundColor: tokens.colors.neutral.light,
        color: tokens.colors.neutral.gray,
        cursor: 'not-allowed',
      }
    }

    switch (variant) {
      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: tokens.colors.secondary.base,
          color: tokens.colors.neutral.white,
        }
      case 'ghost':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: tokens.colors.primary.base,
          borderColor: tokens.colors.primary.base,
        }
      default:
        return {
          ...baseStyles,
          backgroundColor: tokens.colors.primary.base,
          color: tokens.colors.neutral.white,
        }
    }
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} style={getButtonStyles()}>
      {children}
    </button>
  )
}

export const ButtonSchema = schema
