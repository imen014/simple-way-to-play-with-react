import React, { useEffect } from "react";
import { useState } from "react";


function TaskList(){
    const [isSetTask,setTask] = useState(false)
    const [inputValue, setInputValue] = useState("task1")

    function write_task(){
        setTask(!isSetTask);
    };

    function add_task_value(){
        setInputValue();
    };

    return (
        <div>
        <input type="text" value={inputValue} onChange={add_task_value}  onBlur={write_task} id="add_task" placeholder={isSetTask? "add a task...":"write a thing"} /><br/>
        <button onClick={write_task}>  {isSetTask? "Confirm task":"Add new task" }  </button><br/>
        <button>Remove task</button><br/>
        <button>Mark task as finished</button>
        <ul><li>task</li></ul>
        </div>
        
    )
}


export default TaskList;
