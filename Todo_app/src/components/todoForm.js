import { Button,TextField } from "@material-ui/core";
import React,{useState} from "react";
import {v4 as uuidv4} from 'uuid';

const initialTodo={
id:"",
task:"",
completed:false
}
const TodoForm =({addTodo})=>{
    const [todo, setTodo] = useState(initialTodo);

    function handleTaskInputChange(e) {
        setTodo({...todo, task:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo,id:uuidv4()});

            // reset task input
            setTodo({...todo,task:""});
        }
    }
    return(
        <form className="Todo-form" onSubmit={handleSubmit}>
            <TextField
            label="Task"
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;