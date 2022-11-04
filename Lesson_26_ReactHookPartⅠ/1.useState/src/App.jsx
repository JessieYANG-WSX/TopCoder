import React, { useState } from "react";

export default function App() {
  function init(num) {
    console.log('init')
    return num
  }

  const [count, setCount] = useState(init(9));
  // console.log(count);

  const decrementCount = () => {
    // setCount(count - 1)
    setCount((preCount) => preCount - 1);
  };
  const incrementCount = () => {
    // setCount(count + 1)
    setCount((preCount) => preCount + 1);
  };

  return (
    <>
      <div>App</div>
      <button onClick={decrementCount}>-</button>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
