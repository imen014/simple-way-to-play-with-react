import React, { useState } from "react";


function SelecteurTheme(){
    const [isClair, setIsClair] = useState(true)

    const boutonStyle = {
        backgroundColor: isClair? "#ffffff" : "#333333",
        color: isClair? "#ffffff" : "#333333"
    };

    function modifier_theme(){
        setIsClair(!isClair)
        const body = document.body
        body.style.backgroundColor = isClair? "#333333":"#ffffff";
        body.style.color = isClair? "#333333":"#ffffff";
        }

        return (
            <div>
                <button  onClick={modifier_theme} style={boutonStyle}>Modifier theme</button>
            </div>
        )

}

export default SelecteurTheme;