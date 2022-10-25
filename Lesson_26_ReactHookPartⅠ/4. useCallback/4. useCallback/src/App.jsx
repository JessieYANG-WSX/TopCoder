import React from 'react'
import { useState, useCallback } from 'react'
import List from './List'

export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback((add = 0) => {
    return [number + add, (number + add) * 2, (number + add) * 3]
  }, [number])

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? "white" : "black"
  }

  return (
    <div style={theme}>
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme to {dark ? "light" : "dark"}
      </button>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <List getItems={getItems} />
    </div>
  )
}
