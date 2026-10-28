import { useState } from "react";

/*function Toggle(){
    const [show, setShow] = useState(0);
    return(
        <>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <h2>Hello Sandy</h2>}
        </>
    );
}
export default Toggle;*/

export function ToggleOne(){
    const [show, setShow] = useState(false);

    return(
        <>
        <button onClick={() => setShow(!show)}> Toggle1</button>
        {show && <h2>This is Toggle1 </h2>} 
        </>
    );

}



export function ToggleTwo(){
    const [show, setShow] = useState(false);

    return(
        <>
        <button onClick={() => setShow (!show)}> Toggle2</button>
        {show && <h2> This is Toggle 2</h2>}
        </>
    );
}