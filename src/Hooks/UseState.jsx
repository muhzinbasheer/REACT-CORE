import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);
    const [user, setUser] = useState({name: "muhsin", age:22})

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev+1)}>increase</button>
        <input type="number" value={age} onChange={e => setAge(+e.target.value)} />
        <button onClick={() => setUser({...user, age: user.age+1 })}>Birthday</button>
        <p>{user.name} is {user.age} years old.</p>
    </div>
  )
}

export default Counter