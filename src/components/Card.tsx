import schema from '../schema/Card.schema.json'
import type { CSSProperties, ReactNode } from 'react'

export interface CardProps {
  title?: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  style?: CSSProperties
}

export function Card({
  title,
  subtitle,
  children,
  footer,
  className = '',
  style,
}: CardProps) {
  return (
    <div className={className} style={style}>
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

export const CardSchema = schema;
