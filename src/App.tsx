import { useState } from 'react'
import { Button } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h1>Flux Floors</h1>
      </div>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App;
