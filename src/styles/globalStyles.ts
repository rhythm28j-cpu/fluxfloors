import { tokens } from './tokens'

export const globalStyles = `
  :root {
    /* Colors */
    --color-primary-dark: ${tokens.colors.primary.dark};
    --color-primary-base: ${tokens.colors.primary.base};
    --color-primary-light: ${tokens.colors.primary.light};
    --color-primary-lighter: ${tokens.colors.primary.lighter};
    --color-secondary-dark: ${tokens.colors.secondary.dark};
    --color-secondary-base: ${tokens.colors.secondary.base};
    --color-secondary-light: ${tokens.colors.secondary.light};
    --color-secondary-lighter: ${tokens.colors.secondary.lighter};
    --color-neutral-black: ${tokens.colors.neutral.black};
    --color-neutral-dark: ${tokens.colors.neutral.dark};
    --color-neutral-gray: ${tokens.colors.neutral.gray};
    --color-neutral-light: ${tokens.colors.neutral.light};
    --color-neutral-lighter: ${tokens.colors.neutral.lighter};
    --color-neutral-white: ${tokens.colors.neutral.white};
    
    /* Spacing */
    --spacing-xs: ${tokens.spacing.xs};
    --spacing-sm: ${tokens.spacing.sm};
    --spacing-md: ${tokens.spacing.md};
    --spacing-lg: ${tokens.spacing.lg};
    --spacing-xl: ${tokens.spacing.xl};
    --spacing-2xl: ${tokens.spacing['2xl']};
    --spacing-3xl: ${tokens.spacing['3xl']};
    
    /* Border Radius */
    --border-radius-none: ${tokens.borders.radius.none};
    --border-radius-sm: ${tokens.borders.radius.sm};
    --border-radius-md: ${tokens.borders.radius.md};
    --border-radius-lg: ${tokens.borders.radius.lg};
    --border-radius-xl: ${tokens.borders.radius.xl};
    --border-radius-full: ${tokens.borders.radius.full};
    
    /* Typography */
    --font-family-base: ${tokens.typography.fontFamily.base};
    --font-family-mono: ${tokens.typography.fontFamily.mono};
    --font-size-xs: ${tokens.typography.fontSize.xs};
    --font-size-sm: ${tokens.typography.fontSize.sm};
    --font-size-base: ${tokens.typography.fontSize.base};
    --font-size-lg: ${tokens.typography.fontSize.lg};
    --font-size-xl: ${tokens.typography.fontSize.xl};
    --font-size-2xl: ${tokens.typography.fontSize['2xl']};
    --font-size-3xl: ${tokens.typography.fontSize['3xl']};
    --font-size-4xl: ${tokens.typography.fontSize['4xl']};
    --font-weight-light: ${tokens.typography.fontWeight.light};
    --font-weight-normal: ${tokens.typography.fontWeight.normal};
    --font-weight-medium: ${tokens.typography.fontWeight.medium};
    --font-weight-semibold: ${tokens.typography.fontWeight.semibold};
    --font-weight-bold: ${tokens.typography.fontWeight.bold};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    line-height: ${tokens.typography.lineHeight.base};
    background-color: var(--color-neutral-white);
    color: var(--color-neutral-black);
  }

  body {
    background-color: var(--color-neutral-lighter);
    color: var(--color-neutral-dark);
  }

  h1 {
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: ${tokens.typography.lineHeight.tight};
    margin-bottom: var(--spacing-lg);
  }

  h2 {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    line-height: ${tokens.typography.lineHeight.tight};
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--spacing-md);
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  button {
    font-family: inherit;
    font-size: var(--font-size-base);
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .button {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-md);
    font-weight: var(--font-weight-medium);
    border: ${tokens.borders.base} transparent;
  }

  .button--primary {
    background-color: var(--color-primary-base);
    color: var(--color-neutral-white);
  }

  .button--primary:hover {
    background-color: var(--color-primary-light);
  }

  .button--primary:disabled {
    background-color: var(--color-neutral-light);
    color: var(--color-neutral-gray);
    cursor: not-allowed;
  }

  .button--secondary {
    background-color: var(--color-secondary-base);
    color: var(--color-neutral-white);
  }

  .button--secondary:hover {
    background-color: var(--color-secondary-light);
  }

  .button--ghost {
    background-color: transparent;
    color: var(--color-primary-base);
    border-color: var(--color-primary-base);
  }

  .button--ghost:hover {
    background-color: var(--color-primary-lighter);
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--spacing-xl);
  }

  .loading-indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .loading-dot {
    display: inline-block;
    border-radius: var(--border-radius-full);
    animation: loading-dot 0.9s ease-in-out infinite;
  }

  .loading-dot:nth-child(2) {
    animation-delay: 0.15s;
  }

  .loading-dot:nth-child(3) {
    animation-delay: 0.3s;
  }

  .loading-dot:nth-child(4) {
    animation-delay: 0.45s;
  }

  .loading-dot:nth-child(5) {
    animation-delay: 0.6s;
  }

  .loading-dot:nth-child(6) {
    animation-delay: 0.75s;
  }

  @keyframes loading-dot {
    0%,
    80%,
    100% {
      transform: scale(0.8);
      opacity: 0.45;
    }
    40% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`
