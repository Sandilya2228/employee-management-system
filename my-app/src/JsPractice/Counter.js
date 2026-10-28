import { useEffect, useState } from "react";
import React from "react";

//example of use State
/*function Counter(){
    const [count, setCount] = useState(0);

    return(
        <>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)}> Increment</button>
        <button onClick={() => setCount (count-1)}> Decrement</button>
        </>
    );
}
export default Counter;*/

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <>
          <h2>{count}</h2>
          <button onClick={() => setCount (count + 1)}> +</button>
          <button onClick={() => setCount (count -1)}> -</button>

          <button onClick={() => setCount (0)}> reset</button>
        </>
    );

}
export default Counter;

function App() {
  const [count, setCount] = useState(0);

  console.log("Render");

  useEffect(() => {
    console.log("No Dependency");
  });

  useEffect(() => {
    console.log("Empty Array");
  }, []);

  useEffect(() => {
    console.log("Count Dependency");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click
    </button>
  );
}


/*function Outer(){
    let count =0;
    return function Inner(){
        count++;
        console.log(count);
    }
}
const fn = Outer();
fn();
fn();

console.log(a);
var a = 10;



a = 10;
console.log(a); 
var a;

/*console.log(b);
let b = 10;


console.log(c);
const c = 10;*/