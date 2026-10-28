import { useState, useEffect } from "react";

/*useEffect(() => {
    console.log("sand");
});

console.log("Hai")

useEffect(() => {
    console.log("Sun");
}, [count]);*/

function Sample(){
    const [Likes, setLikes] = useState(0);

    return(
        <>
        <h2> Likes : {Likes}</h2>
        <button onClick={() => setLikes(Likes + 1)}>
            Like 👍
        </button>
        </>
    );
}
export default Sample;





