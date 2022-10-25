import React, { useEffect, useState } from 'react'

export default function App() {

  function init(num) {
    console.log('init', num)
    return num
  }
  // function init2(num) {
  //   console.log('init 2')
  //   return num
  // }
  // 最佳方式
  // const [count, setCount] = useState(() => init(11))
  // 简介模式
  const [count, setCount] = useState(() => {
    console.log('init')
    return 10
  })

  const [info, setInfo] = useState({ count: 10, display: 'flex' })

  const [display, setDisplay] = useState('flex')

  function updateInfo() {
    setInfo(preInfo => {
      return { ...preInfo, display: "grid" }
    })
  }

  function updateDisplay() {
    console.log('update display');
    display === 'flex' ? setDisplay('grid') : setDisplay('flex')
  }
  // 不推荐
  // const [count, setCount] = useState(init(11))
  // console.log(count);


  // if (something) {
  //   useState("")
  // }
  const decrementCount = () => {
    // setCount(count - 1)
    setCount(preCount => preCount - 1)
  }
  const incrementCount = () => {
    // setCount(count + 1)
    setCount(preCount => preCount + 1)
  }

  return (
    <>
      <div>App</div>
      <button onClick={decrementCount}>-</button>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
    </>

  )
}