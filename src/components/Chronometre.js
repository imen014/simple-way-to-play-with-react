/*import React, { useState } from "react";

function Chronometre(){
    const [chrono, setChrono] = useState(0)

    function demarrer(chrono){
        setChrono(chrono + 0.001)
    }
    function arreter_chrono(){
        setChrono(chrono)
    }

    return (
        <diV>
            <button onClick={demarrer}> Démarrer Chrono </button>
            <button  onClick={arreter_chrono}> Arréter Chrono </button>
            <p> valeur chrono: {chrono}  </p>

        </diV>
    )
}

export default Chronometre;
*/
import React, { useState, useRef } from "react";

function Chronometre(){
    const [chrono, setChrono] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function demarrer(){
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setChrono(prevChrono => prevChrono + 0.001);
            }, 1);
            setIsRunning(true);
        }
    }

    function arreter(){
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    function reinitialiser(){
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setChrono(0);
    }

    return (
        <div>
            <button onClick={demarrer} disabled={isRunning}> Démarrer Chrono </button>
            <button onClick={arreter} disabled={!isRunning}> Arrêter Chrono </button>
            <button onClick={reinitialiser}> Réinitialiser Chrono </button>
            <p> valeur chrono: {chrono.toFixed(3)} s </p>
        </div>
    );
}

export default Chronometre;
