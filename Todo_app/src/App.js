import { Typography } from '@material-ui/core';
import React,{ useState,useEffect } from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

const LOCAL_STORAGE_KEY = "React_todo_list_todos";


function App() {
const [todos, setTodos] = useState([]);

useEffect(() => {
  const todosStorage =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if(todosStorage!="" && todosStorage!=null)
  {
    setTodos(todosStorage);
  }
 }, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
}, [todos]);

function addTodo(todo){
  setTodos([todo,...todos]);
}
function toggleComplete(id) {
  setTodos(
    todos.map(todo=>{
      if(todo.id === id){
        return  {
          ...todo,
          completed : !todo.completed
        }
      }
      return todo;
    })
  )
  
}
function removeTodo(id){
  setTodos(todos.filter(todo=>
      todo.id !== id
  ))
}
  return (
    <div className="App">
      
        <Typography variant="h1" style={{padding : 16}}
        >React Todo list</Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
