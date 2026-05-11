import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../styles'
import './Layout.css'

export default function Layout() {
  const { tokens } = useTheme()

  const navStyle = {
    backgroundColor: tokens.colors.neutral.white,
    borderBottom: `${tokens.borders.base} ${tokens.colors.primary.light}`,
    position: 'sticky' as const,
    top: 0,
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  }

  const navContainerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    padding: tokens.spacing.lg,
  }

  const brandStyle = {
    margin: 0,
    fontSize: tokens.typography.fontSize['2xl'],
    fontWeight: tokens.typography.fontWeight.bold,
    color: tokens.colors.primary.base,
  }

  const linksStyle = {
    display: 'flex' as const,
    listStyle: 'none' as const,
    gap: tokens.spacing.xl,
    margin: 0,
    padding: 0,
  }

  const linkStyle = {
    textDecoration: 'none' as const,
    fontWeight: tokens.typography.fontWeight.medium,
    fontSize: tokens.typography.fontSize.base,
    color: tokens.colors.neutral.dark,
    position: 'relative' as const,
    transition: 'color 0.3s ease',
  }

  const mainStyle = {
    flex: 1,
    padding: `${tokens.spacing.xl} ${tokens.spacing.md}`,
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%' as const,
  }

  const layoutStyle = {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    minHeight: '100vh',
    backgroundColor: tokens.colors.neutral.lighter,
  }

  return (
    <div style={layoutStyle} className="layout">
      <nav style={navStyle} className="layout-nav">
        <div style={navContainerStyle} className="layout-nav__container">
          <h1 style={brandStyle} className="layout-nav__brand">FluxFloors</h1>
          <ul style={linksStyle} className="layout-nav__links">
            <li>
              <Link to="/components" style={linkStyle} className="layout-nav__link">
                Components
              </Link>
            </li>
            <li>
              <Link to="/builder" style={linkStyle} className="layout-nav__link">
                Builder
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main style={mainStyle} className="layout-main">
        <Outlet />
      </main>
    </div>
  )
}
