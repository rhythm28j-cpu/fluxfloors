import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import ComponentsPage from './pages/ComponentsPage'
import BuilderPage from './pages/BuilderPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/" element={<Navigate to="/builder" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
