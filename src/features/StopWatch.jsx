import { useEffect, useState } from "react"


const StopWatch = () => {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let time = null;
        if(running) {
            time = setInterval(() => {
                setCount(prev => prev + 1)
            },1000)
        }
        return () => clearInterval(time);
    },[running]);

    return (
        <>
        <h2>Count: {count}</h2>
        <button onClick={() => setRunning(prev => !prev)}>
            {running ? "Stop" : "Start"}
        </button>
        <button onClick={() => {setCount(0), running(false)}}>reset</button>
        </>
    )
}

export default StopWatch;