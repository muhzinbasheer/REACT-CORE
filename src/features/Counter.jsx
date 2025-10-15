import React, { useState } from 'react'
import Child from './child';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Counter</h1>
    <button onClick={() => setCount(count+1)}>+</button>
    <Child prop={count}/>
    </>
  )
}

export default Counter