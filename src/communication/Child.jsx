import { useState } from "react"


const Child = ({sendDataToParent}) => {
    const [childMessage, setChildMessage] = useState("");

    return (
        <div>
            <h1>Child Component</h1>
            <input type="text" placeholder="send message to parent" value={childMessage} onChange={(e) => setChildMessage(e.target.value)}/>
            <button onClick={() => sendDataToParent(childMessage)}>send to parent</button>
        </div>
    )
}

export default Child;