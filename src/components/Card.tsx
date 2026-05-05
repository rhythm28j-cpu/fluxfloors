import schema from '../schema/Card.schema.json'
import type { ReactNode } from 'react'

export interface CardProps {
  title?: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export function Card({
  title,
  subtitle,
  children,
  footer,
  className = '',
}: CardProps) {
  return (
    <div className={className}>
      {(title || subtitle) && (
        <header>
          {title ? <h2>{title}</h2> : null}
          {subtitle ? <p>{subtitle}</p> : null}
        </header>
      )}
      <div>{children}</div>
      {footer ? <footer>{footer}</footer> : null}
    </div>
  )
}

export const CardSchema = schema
