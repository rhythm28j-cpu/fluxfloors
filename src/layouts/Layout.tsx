import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <nav className="layout-nav">
        <div className="layout-nav__container">
          <h1 className="layout-nav__brand">FluxFloors</h1>
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
