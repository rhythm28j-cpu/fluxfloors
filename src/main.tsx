import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, globalStyles } from './styles'
import './index.css'

// Inject global styles
const style = document.createElement('style')
style.innerHTML = globalStyles
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
