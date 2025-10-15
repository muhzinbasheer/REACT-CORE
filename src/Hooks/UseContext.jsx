import React, { useContext } from "react";

const UserContext = React.createContext();

export function App(){

    return (
        <UserContext.Provider name="muhsin">
            <Parent />
        </UserContext.Provider>
    )
}

function Parent(){
    return <Child />
}

function Child() {
    return <GrantChild />
}

function GrantChild() {
    const user = useContext(UserContext);
    return <p>{user}</p>
}