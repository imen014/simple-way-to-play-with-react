import React, { useState } from "react";

function AddTask() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    function ajouter_task(event) {
        setTask(event.target.value);
    }

    function confirmer_task() {
        if (task.trim() !== "") {
            setTaskList([...taskList, task]);
            setTask(""); // Réinitialise le champ d'entrée après l'ajout
        }
    }

    return (
        <div>
            <ul>
                {taskList.map((taskItem, index) => (
                    <li key={index}>{taskItem}</li>
                ))}
            </ul>
            <input type="text" value={task} onChange={ajouter_task} />
            <button onClick={confirmer_task}>Confirmer task</button>
        </div>
    );
}

export default AddTask;
