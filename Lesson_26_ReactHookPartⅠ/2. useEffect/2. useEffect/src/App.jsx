import React, { useState, useEffect } from 'react'

export default function App() {
  const [name, setName] = useState('posts')
  const [info, setInfo] = useState('')
  const [infoMap, setInfoMap] = useState([])
  const [mode, setMode] = useState('json')

  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    console.log("render all time")
  })

  useEffect(() => {
    console.log("render init")
  }, [])

  useEffect(() => {
    console.log("render when name changed");
  }, [name])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${name}`)
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => {
        console.log(json);
        setInfo(JSON.stringify(json, null, '\t'))
        setInfoMap(json)
      })

    return () => {
      setInfo("")
      setInfoMap([{ state: "Loading..." }])
      console.log('clear info')
    }
  }, [name])

  return (
    <>
      <div>
        <button onClick={() => setName('posts')}>posts</button>
        <button onClick={() => setName('comments')}>comments</button>
        <button onClick={() => setName('todos')}>todos</button>
        <button onClick={() => setName('users')}>users</button>
        <button onClick={() => {
          if (mode === 'json') {
            setMode('map')
          } else {
            setMode('json')
          }
        }}>Mode:{mode}</button>
      </div>
      <h1>{name} {width}</h1>
      {
        mode === 'json' ?
          <textarea readOnly value={info}></textarea>
          : infoMap.map((item, key) => <pre key={key}>{JSON.stringify(item)}</pre>)
      }
    </>

  )
}
