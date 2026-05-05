// Border Styles
export const borders = {
  none: 'none',
  thin: '1px solid',
  base: '2px solid',
  thick: '3px solid',
  radius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
} as const

export type BorderRadiusKey = keyof typeof borders.radius
