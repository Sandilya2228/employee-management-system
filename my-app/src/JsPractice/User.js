import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Users() {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [message, setMessage] = useState("");
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    

    const usersPerPage = 3;


    const filteredUsers = users
        .filter(
            (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.company.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            }
            if (sortOrder === "desc") {
                return b.name.localeCompare(a.name);
            }
            return 0

        });

    // GET API
    const fetchUsers = () => {
        fetch(`${process.env.REACT_APP_API_URL}/users?page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    };

    // POST API
    const addUser = async () => {
        if (!name || !email || !company) {
            alert("All fileds are required !");
            return;
        }
        if (!email.includes("@")) {
            alert("Inavalid Email");
            return;
        }
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    company
                })
            }
        );

        const data = await response.json();

        console.log("POST Response:", data);

        fetchUsers();
    };


    const editUser = (user) => {

        setSelectedId(user.id);

        setName(user.name);
        setEmail(user.email);
        setCompany(user.company);

    };
    // PUT API
    /*const updateUser = async () => {

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/2`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    company
                })
            }
        );
        const data = await response.json();

        console.log("PUT Response:", data);

        fetchUsers();
    };
*/

    const updateUser = async () => {

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/${selectedId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    company
                })
            }
        );

        const data = await response.json();

        console.log(data);

        fetchUsers();

        setSelectedId(null);

        setName("");
        setEmail("");
        setCompany("");

    };
    /*const deleteUser = async (id) => {

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        console.log(data);

        fetchUsers();
    };*/

    const deleteUser = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );
        if (!confirmDelete) {
            return;
        }
        try {
            console.log("Deleting:", id);
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${id}`,
                {
                    method: "DELETE"
                }
            );
            const data = await response.json();
            console.log(data);
            setMessage("User Deleted Successfully");
            fetchUsers();
        } catch (error) {
            console.log(error);
            setMessage("Failed To Delete User");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [currentPage])


    const lastUserIndex =
        currentPage * usersPerPage;
    const firstUserIndex =
        lastUserIndex - usersPerPage;
    const currentUsers = filteredUsers.slice(
        firstUserIndex,
        lastUserIndex
    );

    const totalPages = Math.ceil(
        filteredUsers.length / usersPerPage
    );

     const navigate = useNavigate();
    const logout = () => {
        console.log("Logout Clicked");

        localStorage.removeItem("token");

        navigate("/");

    };

    return (
        <>

            <input
                type="text"
                placeholder="Search User"
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            ></input>

            <button onClick={() => setSortOrder("asc")}>
                Sort A-Z
            </button>
            <button onClick={() => setSortOrder("desc")}>
                Sort Z-A
            </button>
            <button onClick={logout}>
                Logout
            </button>
            <table>
                <thead>
                    <tr>
                        <td>
                            <input
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>

                        <td>
                            <input
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </td>

                        <td>
                            <input
                                placeholder="Company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </td>
                        <td>
                            {selectedId ? (
                                <button onClick={updateUser}>
                                    Update User
                                </button>
                            ) : (
                                <button onClick={addUser}>
                                    Add User
                                </button>
                            )}
                        </td>

                    </tr>
                </thead>

                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.company}</td>

                            <td>
                                <button onClick={() => editUser(user)}>
                                    Edit
                                </button>
                            </td>

                            <td>
                                <button onClick={() => deleteUser(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
                disabled={currentPage === 1}
                onClick={() =>
                    setCurrentPage(currentPage - 1)
                }
            >
                Previous
            </button>

            <span>
                Page {currentPage}
            </span>

            <button
                disabled={currentPage === totalPages}
                onClick={() =>
                    setCurrentPage(currentPage + 1)
                }
            >
                Next
            </button>
        </>
    );
}

export default Users;