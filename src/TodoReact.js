import React from 'react'
import './TodoReact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function TodoReact() {
  return (
    <>
    <div class="main">
    <div class="txt">
       <h3>To Do App</h3>
       <p>Now you can organize your daily task</p>
       <input placeholder="Add your new task "/>
       <button>Add Task</button>
   </div>

   <div class="taskTxt">
    <h5>Your Task</h5>
    
        <ul class="list-group">
            <div>
                <li class="list-group-item">
                    An item

                    {<span>
                        <i class="bi bi-bag-check"></i>
                        <i class="bi bi-trash"></i>
                        <i class="bi bi-pen"></i>

                    </span> }
                </li>

                
            </div>

            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        
        </ul>

   </div>
   </div>
    </>
  )
}

export default TodoReact