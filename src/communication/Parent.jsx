import { useState } from "react"
import Child from "./child";

const Parent = () => {
    const [messageFromChild, setMessageFromChild] = useState("");

    const handleChildMessage = (data) => {
        setMessageFromChild(data)
    }

    return (
        <>
        <h1>Parent Component</h1>
        <p>message from child: {messageFromChild}</p>

        <Child sendDataToParent={handleChildMessage} />
        </>
    )
}

export default Parent;