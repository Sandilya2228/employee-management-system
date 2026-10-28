import { useState } from "react";

function useBackgroundColor() {
    const [color, setColor] = useState("white");

    const changeColor = () => {
        setColor(prev => (prev === "white" ? "lightblue" : "white"));
    };
    return {color, changeColor};
}    
export default useBackgroundColor;