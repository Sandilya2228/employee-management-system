import { useState } from "react";

function ToggleReusetwo({messageText, buttonText}) {
    const[show, setShow] = useState(false);

    return(
        <>
        <button onClick={() => setShow(!setShow)}>{buttonText}</button>
        {setShow && <h2>{messageText}</h2>}
        </>
    );
}
export default ToggleReusetwo;