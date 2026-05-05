// Color Palette - Dark Green Theme
export const colors = {
  // Primary - Dark Green
  primary: {
    dark: '#0F4C2F',
    base: '#1B5E3F',
    light: '#2D7A4F',
    lighter: '#4A9D6F',
  },
  // Secondary - Accent Green
  secondary: {
    dark: '#1A6B5E',
    base: '#248A7D',
    light: '#3BA99C',
    lighter: '#5CBFB5',
  },
  // Neutral
  neutral: {
    black: '#1A1A1A',
    dark: '#3A3A3A',
    gray: '#6B7280',
    light: '#E5E7EB',
    lighter: '#F3F4F6',
    white: '#FFFFFF',
  },
  // State colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const

export type ColorKey = keyof typeof colors
