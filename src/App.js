import TaskFrom from './component/TaskFrom';
import Tasks from './component/Tasks';
import './App.css';
import logo from './logo.svg';
import React, { useState } from "react";


function App() {

  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState(""); 
  const [isEditing, setIsEditing] = useState(false); 
  const [isValidate, setIsValidate] = useState(false); 
  const [currentTodo, setCurrentTodo] = useState(null); 

 
  const handleInput = (e) => {
    setInput(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentTodo ? input : todo
      );
      setTodos(updatedTodos); 
      setIsEditing(false);
    } else if (input.trim()) {
      setTodos([...todos, input]);
    }
    setInput(""); 
  };

  
  const handleEdit = (index) => {
    setIsEditing(true); 
    setCurrentTodo(index); 
    setInput(todos[index]); 
  };


  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos); 
    if (isEditing && index === currentTodo) {
      setIsEditing(false);
      setInput("");
    }
  };

 
  return (
    <div className="App">
      <header className="App-header">

       <TaskFrom  handleSubmit={handleSubmit} input={input} handleInput={handleInput} isEditing={isEditing} />
       <Tasks todos={todos}  handleEdit={handleEdit} handleDelete={handleDelete} />
     
       </header>
    </div>
  );
}


export default App;





























