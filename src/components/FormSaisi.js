import React, { useState } from "react";

function FormSaisi(){

    const [texte_saisi, setTexte_saisi] = useState("")

    function modify_texte(event){
        setTexte_saisi(event.target.value)
        
        
    }

    function SoumettreForm(event){
        event.preventDefault()
        console.log("texte saisi : " + texte_saisi)

    }

    return (
        <div>
            <form>
                <input type="text" onBlur={modify_texte}  />
                 <p>valeur saisi : {texte_saisi} </p>
                <button onClick={SoumettreForm}> Soumettre </button>
            </form>
        </div>
    )
}

export default FormSaisi;
