import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [result, setResult]= useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("timer")
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        async function fetchdata() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setResult(data)
            console.log(data);
        }
        fetchdata()
    }, [])
  return (
    <>
    {/* <p>{result.map((i) => )}</p> */}
    {result.map((item)=> {
        return(
            <div key={item.id}>
                <h1>{item.title}</h1>
            </div>
        )
    })}
    </>
  )
}

export default UseEffect