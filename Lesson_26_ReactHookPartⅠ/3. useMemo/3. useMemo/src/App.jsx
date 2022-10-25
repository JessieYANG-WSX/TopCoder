import React, { useState, useMemo, useEffect } from 'react'

export default function App() {
  const [number, setNumber] = useState(0)
  const calcNumber = useMemo(() => verySlowFunc(number), [number])
  const [count, setCount] = useState(10)

  function verySlowFunc(num) {
    console.log('This is a very slow function');
    for (let i = 0; i <= 900000000; i++) { }
    return num * 100 / 6 * 3 / 25
  }

  function decrementCount() {
    setCount(count - 1)
  }

  function incrementCount() {
    setCount(count + 1)
  }

  return (
    <div>
      <input type='number' value={number} onChange={
        e => setNumber(parseInt(e.target.value))
      } />
      {calcNumber}

      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </div>
  )
}
