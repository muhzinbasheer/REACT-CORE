import { useEffect, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchdata() {
            const response = await fetch(url);
            const result = response.json();
            setData(result);
            setLoading(false);
        }
        fetchdata()
    }, [url]);

    return {data, loading};
}

function Users() {
    const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/users")

    if(loading) return <p>Loading...</p>
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default Users;

//useLocalStorage

// export function useLocalStorage(key, initialValue) {
//     const [value, setValue] = useState(
//         () => localStorage.getItem(key) || initialValue
//     )

//     useEffect(() => {
//         localStorage.setItem(key, value)
//     }, [value]);

//     return [value, setValue]
// }

// const [name, setName] = useLocalStorage("name", "Muhsin");