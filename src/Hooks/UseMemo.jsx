import { useMemo, useState } from "react";


export function ExpensiveComponent({num}) {
    const calculation = useMemo(() => {
        console.log("calculating...")
        return num * 1000;
    }, [num]);

    return <p>Result: {calculation}</p>
}

function UseMemoApp(){
    const [count, setCount] = useState(0)
    const [num, ] = useState(5)

    return (
        <>
        <ExpensiveComponent num={num}/>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>Re-render</button>
        </>
    )
}

export default UseMemoApp;