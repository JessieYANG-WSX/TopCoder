import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function List({ getItems }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(getItems(10))
    console.log('Update Items');
  }, [getItems])
  return (
    <div>
      {
        items.map((item, key) => <div key={key}>{item}</div>)
      }
    </div>
  )
}
