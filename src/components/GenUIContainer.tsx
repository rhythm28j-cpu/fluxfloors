import type { ReactNode } from 'react'
import { componentRegistry } from '../registry/componentRegistry'
import { ErrorBoundary } from './ErrorBoundary'
import { validateProps, type ValidationError } from '../utils/schemaValidator'
import { useTheme } from '../styles'

export interface GenUIItem {
  componentId: string
  props: Record<string, unknown>
}

export interface GenUIContainerProps {
  items: GenUIItem[]
  onValidationError?: (errors: Array<{ item: GenUIItem; errors: ValidationError[] }>) => void
}

export function GenUIContainer({ items, onValidationError }: GenUIContainerProps) {
  const { tokens } = useTheme()

  const validatedItems = items.map((item) => {
    const registryEntry = componentRegistry.find((entry) => entry.id === item.componentId)

    if (!registryEntry) {
      return {
        item,
        valid: false,
        errors: [{ field: 'componentId', message: `Component "${item.componentId}" not found in registry` }],
        component: null,
      }
    }

    const validation = validateProps(item.props, registryEntry.schema)

    return {
      item,
      valid: validation.valid,
      errors: validation.errors,
      component: registryEntry.component,
      schema: registryEntry.schema,
    }
  })

  const invalidItems = validatedItems.filter((v) => !v.valid)
  if (invalidItems.length > 0 && onValidationError) {
    onValidationError(invalidItems.map((v) => ({ item: v.item, errors: v.errors })))
  }

  return (
    <div
      style={{
        display: 'grid',
        gap: tokens.spacing.lg,
      }}
    >
      {validatedItems.map((validated, index) => {
        if (!validated.valid || !validated.component) {
          return (
            <div
              key={index}
              style={{
                padding: tokens.spacing.lg,
                backgroundColor: '#fee2e2',
                borderRadius: tokens.borders.radius.lg,
                border: `1px solid #fca5a5`,
                color: '#991b1b',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Invalid Component: {validated.item.componentId}</h3>
              <ul style={{ margin: 0, paddingLeft: tokens.spacing.lg }}>
                {validated.errors.map((error, idx) => (
                  <li key={idx}>
                    <strong>{error.field}:</strong> {error.message}
                  </li>
                ))}
              </ul>
            </div>
          )
        }

        return (
          <ErrorBoundary
            key={index}
            fallback={(error) => (
              <div
                style={{
                  padding: tokens.spacing.lg,
                  backgroundColor: '#fee2e2',
                  borderRadius: tokens.borders.radius.lg,
                  border: `1px solid #fca5a5`,
                  color: '#991b1b',
                }}
              >
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Render Error: {validated.item.componentId}</h3>
                <pre style={{ fontSize: '0.85rem', overflow: 'auto', margin: '0.5rem 0' }}>
                  {error.message}
                </pre>
              </div>
            )}
          >
            <div
              style={{
                padding: tokens.spacing.lg,
                backgroundColor: tokens.colors.neutral.white,
                borderRadius: tokens.borders.radius.lg,
                border: `1px solid ${tokens.colors.neutral.light}`,
              }}
            >
              <validated.component {...validated.item.props} />
            </div>
          </ErrorBoundary>
        )
      })}
    </div>
  )
}
