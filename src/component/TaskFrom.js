import React from 'react'

const TaskFrom = ({handleSubmit,input,handleInput,isEditing}) => {



  return (
    <div  className='form_task'  >

         <h3  style={{color:'#282c34'}}  >Save a task</h3>

        <input
          className='input_'
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter task"
        />
    
         <div className='btn' onMouseUp={ handleSubmit } >
                <span style={{fontSize:'1.2rem'}}   >
                       {isEditing ? "Update task" : "Add task"}
                </span>
          </div>
      </div>
  )
}

export default TaskFrom