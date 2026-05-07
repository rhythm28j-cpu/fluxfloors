import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../styles'
import './Layout.css'

export default function Layout() {
  const { tokens } = useTheme()

  return (
    <div className="layout">
      <nav className="layout-nav" style={{ borderBottomColor: tokens.colors.primary.light }}>
        <div className="layout-nav__container" style={{ padding: tokens.spacing.lg }}>
          <h1 className="layout-nav__brand" style={{ color: tokens.colors.primary.base }}>FluxFloors</h1>
          <ul className="layout-nav__links">
            <li>
              <Link to="/components" className="layout-nav__link">
                Components
              </Link>
            </li>
            <li>
              <Link to="/builder" className="layout-nav__link">
                Builder
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  )
}
