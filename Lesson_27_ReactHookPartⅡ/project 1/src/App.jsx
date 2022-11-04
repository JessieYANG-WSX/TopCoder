import React, {useState, useEffect} from 'react'
import List from './components/List'
import Todo from './components/Todo'

export default function App() {
  console.log("App Render");

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("App useEffect Render")
  }, []);

  useEffect(() => {
    console.log('===========================');
  });

  return (
    <div>
      <Todo />
      <button onClick={handleButton}>Add</button>
      {count}
      <
    </div>
  )
}
