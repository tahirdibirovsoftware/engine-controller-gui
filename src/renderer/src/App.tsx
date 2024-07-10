import { useState } from 'react'
import './App.css'

const App = (): JSX.Element => {
  const [range, setRange] = useState<number>(1000)

  const rangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRange(parseInt(event.target.value))
    window.api.moveEngine(parseInt(event.target.value))
  }

  return (
    <div className="App">
      <input
        className="rangeController"
        onChange={rangeHandler}
        type="range"
        min={1000}
        max={2000}
      />
      <h1>{range}</h1>
    </div>
  )
}

export default App
