import { useState } from 'react'
import { GenUIContainer, type GenUIItem } from '../components/GenUIContainer'
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
        title: 'Generated Card',
        subtitle: 'This card was created by AI',
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
        <div
          style={{
            padding: tokens.spacing.lg,
            backgroundColor: '#fee2e2',
            borderRadius: tokens.borders.radius.lg,
            border: `1px solid #fca5a5`,
            color: '#991b1b',
            marginBottom: tokens.spacing.lg,
          }}
        >
          <h3>Validation Errors</h3>
          <ul>
            {validationErrors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <section className="builder-container">
        <GenUIContainer items={sampleAIOutput} onValidationError={handleValidationError} />
      </section>
    </main>
  )
}
