import schema from '../schema/ImageContainer.schema.json'
import type { ReactNode } from 'react'

export interface ImageContainerProps {
  src: string
  alt: string
  caption?: string
  className?: string
  width?: number | string
  height?: number | string
  children?: ReactNode
}

export function ImageContainer({
  src,
  alt,
  caption,
  className = '',
  width = '100%',
  height = 'auto',
  children,
}: ImageContainerProps) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} width={width} height={height} />
      {caption ? <figcaption>{caption}</figcaption> : null}
      {children}
    </figure>
  )
}

export const ImageContainerSchema = schema
