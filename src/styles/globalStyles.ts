import { tokens } from './tokens'

export const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${tokens.typography.fontFamily.base};
    font-size: ${tokens.typography.fontSize.base};
    line-height: ${tokens.typography.lineHeight.base};
    background-color: ${tokens.colors.neutral.white};
    color: ${tokens.colors.neutral.black};
  }

  body {
    background-color: ${tokens.colors.neutral.lighter};
    color: ${tokens.colors.neutral.dark};
  }

  h1 {
    font-size: ${tokens.typography.fontSize['4xl']};
    font-weight: ${tokens.typography.fontWeight.bold};
    line-height: ${tokens.typography.lineHeight.tight};
    margin-bottom: ${tokens.spacing.lg};
  }

  h2 {
    font-size: ${tokens.typography.fontSize['3xl']};
    font-weight: ${tokens.typography.fontWeight.semibold};
    line-height: ${tokens.typography.lineHeight.tight};
    margin-bottom: ${tokens.spacing.md};
  }

  h3 {
    font-size: ${tokens.typography.fontSize['2xl']};
    font-weight: ${tokens.typography.fontWeight.semibold};
    margin-bottom: ${tokens.spacing.md};
  }

  p {
    margin-bottom: ${tokens.spacing.md};
  }

  button {
    font-family: inherit;
    font-size: ${tokens.typography.fontSize.base};
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .button {
    padding: ${tokens.spacing.sm} ${tokens.spacing.md};
    border-radius: ${tokens.borders.radius.md};
    font-weight: ${tokens.typography.fontWeight.medium};
    border: ${tokens.borders.base} transparent;
  }

  .button--primary {
    background-color: ${tokens.colors.primary.base};
    color: ${tokens.colors.neutral.white};
  }

  .button--primary:hover {
    background-color: ${tokens.colors.primary.light};
  }

  .button--primary:disabled {
    background-color: ${tokens.colors.neutral.light};
    color: ${tokens.colors.neutral.gray};
    cursor: not-allowed;
  }

  .button--secondary {
    background-color: ${tokens.colors.secondary.base};
    color: ${tokens.colors.neutral.white};
  }

  .button--secondary:hover {
    background-color: ${tokens.colors.secondary.light};
  }

  .button--ghost {
    background-color: transparent;
    color: ${tokens.colors.primary.base};
    border-color: ${tokens.colors.primary.base};
  }

  .button--ghost:hover {
    background-color: ${tokens.colors.primary.lighter};
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: ${tokens.spacing.xl};
  }
`
