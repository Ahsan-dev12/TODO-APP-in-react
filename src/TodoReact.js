import React, { useState } from 'react'
import './TodoReact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function TodoReact() {

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    
    function handleInputChng(e){

        setInput(e.target.value);
    }
    
    // handle the add operation 
    function handleAddTask(e){ 
        e.preventDefault();
        
        if(editIndex !==null){
            
            const updatedTask = [...tasks];
            updatedTask[editIndex] = input;
            setTasks( updatedTask);
            setEditIndex(null);
            setInput(""); // input clear
        }
        else{

            if(tasks.includes(input)){

                alert("This task is already Existing")

            }else{

                setTasks([...tasks, input]); // input string hai, add ho jayega
                setInput(""); // input clear

            }

        }
        
        console.log(tasks);
    }

    //handle the task delete operation
    function handleDelete(recieveIndex){

        const udatedTaskList = tasks.filter((task, index)=> index !== recieveIndex);
        setTasks(udatedTaskList);

    }

    function handleEdit(reviceIndex){
        
        setInput(tasks[reviceIndex]);
        setEditIndex(reviceIndex); //input field edit task ko set kr raha ha

    }

    // This the return  
  return (
    
    <>
    <div className="main">
    <div className="txt">
       <h3>To Do App</h3>
       <p>Now you can organize your daily task</p>

       <form onSubmit={handleAddTask}>
          <input placeholder="Add your new task" value={input} onChange={handleInputChng}/>

           <button type="submit">Add Task</button>
       </form>

   </div>

   <div className="taskTxt">
    <h5>Your Task</h5>
    
        <ul className="list-group">
            {
            tasks.map((task, index)=>(
                <li key={index}>
                    
                    {task} --- {<span>
                        <i className="bi bi-trash" onClick={()=>handleDelete(index)}></i>
                        <i className="bi bi-pen " onClick={()=>handleEdit(index)}></i>
                        </span> }
                    
                </li>

            ))
        }
            
        </ul>

   </div>
   </div>
    </>
  )
}

export default TodoReact