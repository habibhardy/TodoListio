import React from 'react'
import Task from './Task'
import './../App.css';


const Tasks = ({todos,handleEdit,handleDelete,}) => {
       console.log(todos.length)
  return (
    <div  className='task_list' style={{justifyContent:todos.length==0 ? 'center':'start'}}  >
   
    {todos.length==0 ? <h1 style={{color:'black'}} >EMPTY :(</h1> :
        todos.map((todo, index) => (
            <Task key={index} index={index}   todo={todo} handleEdit={handleEdit} handleDelete={handleDelete} />
            ))
        }
      </div>
  )
}

export default Tasks