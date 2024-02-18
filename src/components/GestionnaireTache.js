import React, { useState } from "react";


function GestionnaireTache(){
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    function add_task(event){
        setTask(event.target.value);
    };

    function ajouter_tache_list(){
        setTasks(tasks => [...tasks, task]);
        setTask("")
    };


    return (
        <div>
            <input type="text" value={task} onChange={add_task}/>
                <ul>

                    {tasks.map((task, index) => (
                        <li  key={index} >{task}</li>
                    ))}
                    </ul>
                    
                    <p>{task}</p>
                    <button onClick={add_task}> add task  </button>
                    <button onClick={ajouter_tache_list}> push list </button>
                    </div>
    )
                    }
export default GestionnaireTache;