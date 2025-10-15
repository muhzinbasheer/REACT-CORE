import React, { useEffect, useRef } from 'react'

// const  InputFocus = () => {
//     const inputRef = useRef(null);

//     const focusInput = () => {
//         inputRef.current.focus();
//     }
//   return (
//     <div>
//         <input ref={inputRef} type="text" />
//         <h1></h1>
//         <button onClick={focusInput}>Focus Input</button>
//     </div>
//   )
// }

// export default  InputFocus

function Timer() {
  const countRef = useRef(0);

  const increase = () => {
    countRef.current += 1; // value changes, but no re-render
    console.log("Count:", countRef.current);
  };

  return (
    <>
     <button onClick={increase}>Increase</button>
    </>
  )
}
export default Timer;

function PrevValue({value}) {
    const prevVal = useRef(0);

    useEffect(() => {
        prevVal.current = value
    }, [value]);

    return (
        <>
        <p>ccurrent: {value}, prevVal: {prevVal.current}</p>
        </>
    )
}

function PreviousValue({ value }) {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <p>
      Current: {value}, Previous: {prevValue.current}
    </p>
  );
}
