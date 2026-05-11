import type { ReactNode } from 'react'

export interface ValidationError {
  field: string
  message: string
}

export interface ValidationResult {
  valid: boolean
  errors: ValidationError[]
}

export function validateProps(
  props: Record<string, unknown>,
  schema: Record<string, unknown>,
): ValidationResult {
  const errors: ValidationError[] = []

  if (!schema.properties || typeof schema.properties !== 'object') {
    return { valid: true, errors: [] }
  }

  const schemaProps = schema.properties as Record<string, any>
  const requiredFields = schema.required as string[] | undefined

  // Check required fields
  if (requiredFields) {
    for (const field of requiredFields) {
      if (!(field in props)) {
        errors.push({
          field,
          message: `Required field "${field}" is missing`,
        })
      }
    }
  }

  // Basic type validation for provided fields
  for (const [key, value] of Object.entries(props)) {
    const fieldSchema = schemaProps[key]
    if (!fieldSchema) continue

    const expectedType = (fieldSchema as any).type
    if (!expectedType) continue

    const actualType = Array.isArray(value) ? 'array' : typeof value
    const expectedTypes = Array.isArray(expectedType) ? expectedType : [expectedType]

    if (
      actualType !== 'null' &&
      !expectedTypes.includes(actualType)
    ) {
      errors.push({
        field: key,
        message: `Field "${key}" should be ${expectedTypes.join(' or ')}, got ${actualType}`,
      })
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}
