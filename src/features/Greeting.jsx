import React, { useState } from "react";

function TextForm({prop}) {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        prop(input)
    }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Enter your name" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function Greetings() {
    const [name, setName] = useState("")
  return (
    <>
      <h1>Hello user {name}</h1>
      <hr />
      <TextForm prop={setName}/>
    </>
  );
}

export default Greetings;