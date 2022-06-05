import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading,SetIsLoading] = useState(true);
    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(data=>data.json())
            .then(users=>setUsers(users))
            .catch((e)=>console.log(e))
            .finally(()=>SetIsLoading(false))
    }, []);
    return(
        <>
        <h1>Users</h1>
        {isLoading && <div style={{color : "yellow"}}>loading...</div>}
        {users.map(user=><div key={user.id}>{user.name}</div>)}
        </>
    )
}

export default Users;