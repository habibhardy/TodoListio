import React from 'react'
import './../App.css';
import img1 from './../images/task_.png'
import img2 from './../images/failed_.png'
import img3 from './../images/validated_.png'

import img4 from './../images/circle_.png'
import img5 from './../images/cross_.png'
import img6 from './../images/validd.png'
import img7 from './../images/edit_.png'

const Task = ({index,todo,handleEdit,handleDelete}) => {

  console.log(">>>>>>:::")


  return (
    <div key={index}  className='task_row'   >
     {/* AVATAR */}
          <img  src={img1} className='avatar' />

           <span className='text' >
                {todo}
           </span>

              {/* RIGHT CORNER */}
           <div  className='right' >
                    
                     <div className='circle'>
                      <img  src={img6} className='left_valid' onMouseUp={() => handleEdit(index)} />
                
                      </div>

                    
                      <img  src={img7} className='right_1' onMouseUp={() => handleEdit(index)} />
                    

                      <img  src={img5} className='right_' onMouseUp={()=>{
                        setTimeout(() => {
                            handleDelete(index)
                        }, 300);
                  }}   />
           </div>
  </div>
  )
}

export default Task