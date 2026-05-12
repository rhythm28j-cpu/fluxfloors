import { useState } from 'react'
import { Card, GenUIContainer, type GenUIItem } from '../components'
import { useTheme } from '../styles'

export default function BuilderPage() {
  const { tokens } = useTheme()

  // Sample AI-generated UI definition
  const sampleAIOutput: GenUIItem[] = [
    {
      componentId: 'text',
      props: {
        as: 'h2',
        size: 'large',
        weight: 'bold',
        children: 'AI Generated UI Example',
        color: tokens.colors.primary.base,
      },
    },
    {
      componentId: 'text',
      props: {
        as: 'p',
        size: 'medium',
        children: 'This is a dynamically generated user interface created from AI output',
      },
    },
    {
      componentId: 'card',
      props: {
        title: 'Card Headline',
        subtitle: 'Card sub-heading',
        children: 'The GenUIContainer validates and renders components based on JSON schema definitions.',
      },
    },
    {
      componentId: 'table',
      props: {
        columns: ['Feature', 'Status'],
        data: [
          { Feature: 'Schema Validation', Status: 'Active' },
          { Feature: 'Error Handling', Status: 'Active' },
          { Feature: 'Dynamic Rendering', Status: 'Active' },
        ],
        borders: 'rows',
      },
    },
    {
      componentId: 'loadingIndicator',
      props: {
        label: 'Loading AI results...',
        size: 'medium',
        dotCount: 4,
      },
    },
  ]

  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const handleValidationError = (errors: any[]) => {
    const errorMessages = errors.flatMap((e) =>
      e.errors.map((err: any) => `${e.item.componentId} - ${err.field}: ${err.message}`),
    )
    setValidationErrors(errorMessages)
  }

  return (
    <main className="builder-page">
      <header className="builder-header">
        <h1>AI Interface Builder</h1>
        <p>GenUIContainer validates and renders AI-generated component definitions with error handling.</p>
      </header>

      {validationErrors.length > 0 && (
        <Card
          title="Validation Errors"
          className="error-card"
          style={{
            padding: tokens.spacing.lg,
            backgroundColor: `${tokens.colors.error}15`,
            borderRadius: tokens.borders.radius.lg,
            border: `1px solid ${tokens.colors.error}60`,
            color: tokens.colors.error,
            marginBottom: tokens.spacing.lg,
          }}
        >
          <ul>
            {validationErrors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </Card>
      )}

      <section className="builder-container">
        <GenUIContainer items={sampleAIOutput} onValidationError={handleValidationError} />
      </section>
    </main>
  )
}
