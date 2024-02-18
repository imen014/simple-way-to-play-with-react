import React, {useState} from "react";

function NewTask(){
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    function setNewTask(event){
        setTask(event.target.value)
    }

    function setNewTasks(){
        setTasks(tasks, task)
        setTask("")
    }

    return (
        <div>
            <ul>
                {
                    tasks.map((task,index) => (
                        <li key={index}  >{task}</li>
                    ))
                }
            
            </ul>
            <input type="text" value={task} onChange={setNewTask} />
            <input type="button" onClick={setNewTasks}  value="ajouter aux liste de taches" />

        </div>
    )
}


export default NewTask;