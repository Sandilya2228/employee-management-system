function outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log(count);
    };
}
const fn = outer();
fn();
fn();


fetch("https://jsonplaceholder.typicode.com/users")
.then(() => res.json())
.then(() => console.log(data))
.catch(() => console.log(err));  

fetch("https://jsonplaceholder.typicode.com/users")
.then(() => res.json())
.then(() => res(data))
