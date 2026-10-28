import { useState, useEffect } from "react";

function Users(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (<div>
        <h1>Users</h1>
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>);
}
export default users;