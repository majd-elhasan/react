import React from "react";
import Todo from "./todo.js";
import { List } from "@material-ui/core";

function TodoList({todos,toggleComplete,removeTodo}) {
    return(
        <List >
            {todos.map(item =>(
                <Todo key={item.id} todo={item} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            ))}
        </List>
    );
}

export default TodoList;