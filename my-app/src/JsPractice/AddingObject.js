/*const users = {
    name: "John",
    age: 30,
    city: "New York", 
};

console.log(users);

function AddingObject() {
    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {users.name}</p>
            <p>Age: {users.age}</p>
            <p>City: {users.city}</p>
        </div>
    );
}

export default AddingObject;
*/
/*const users = {
    name: "John",
    age: 30,
    city: "New York", 
};
users.country = "USA";

const app  = document.getElementById("app");
app.innerHTML = `
    <h1>User Information</h1>
    <p>Name: ${users.name}</p>
    <p>Age: ${users.age}</p>
    <p>City: ${users.city}</p>
    <p>Country: ${users.country}</p>
`;*/

const users = [{
    name: "John",
    age: 30,
    city: "New York",   
}]

/*users[0].country = "USA";

console.log(users);*/

const UpdateUser = users.map(user => {
    return {
        ...user,
        country: "India"
    };
});

console.log(UpdateUser);