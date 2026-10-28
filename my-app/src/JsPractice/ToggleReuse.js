import { useState } from "react";

function ToggleReuse({messageText, buttonText}) {
    const[show, setShow] = useState(false);

    return(
        <>
        <button onClick={() => setShow(!show)}>{buttonText}</button> 
        {show && <h2>{messageText}</h2>}
        </>
    );
}
export default ToggleReuse;
