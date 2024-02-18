import React, { useState } from "react";

function CompteurSimple(){
    const [counter, setCounter] = useState(0)

    function augmenter_compteur(){
        setCounter(counter +1);
    };

    function diminuer_compteur(){
        setCounter(counter - 1);
    }

    return (
        <div>
            <button onClick={augmenter_compteur}> +1 </button>
            <button onClick={diminuer_compteur}> -1  </button>
            <input type="text" readOnly value={counter} />
        </div>
    )


}


export default CompteurSimple;