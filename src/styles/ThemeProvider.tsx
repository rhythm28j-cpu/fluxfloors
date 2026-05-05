import { createContext, useContext, type ReactNode } from 'react'
import { tokens, type DesignTokens } from './tokens'

interface ThemeContextType {
  tokens: DesignTokens
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ tokens }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
