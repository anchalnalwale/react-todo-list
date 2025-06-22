import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  let [todos , setTodos] = useState([{task : "sample-task" , id : uuidv4() , isDone: false}]);
  let [newTodo , setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos ((prevTodos) => {
            return [...prevTodos, {task : newTodo , id : uuidv4() , isDone: false}];
        })
        setNewTodo("");
    };
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <input placeholder='Add a task' type='text' />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <h4>To Do List</h4>
      <ul>

      </ul>
    </div>
  )
}

export default Todo