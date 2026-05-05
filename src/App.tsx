import { useState } from 'react'
import { Button } from './components'
import { useTheme } from './styles'
import './App.css'

function App() {
  const { tokens } = useTheme()
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: tokens.spacing.xl }}>
      <div>
        <h1 style={{ color: tokens.colors.primary.base }}>Flux Floors</h1>
      </div>
      <div className="card" style={{ borderRadius: tokens.borders.radius.lg, padding: tokens.spacing.lg, backgroundColor: tokens.colors.neutral.white }}>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App;
