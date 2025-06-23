import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    })
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };
  let markAsDone = (id) => {
        setTodos((prevTodos) => 
        prevTodos.map((todo) => {
            if(todo.id==id)
            {
                return {
                    ...todo , isDone: true,
                };
            }
            else
            {
                return todo;
            }
        })
      );
    }
    
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <input placeholder="Add a task" type="text" value={newTodo} onChange={updateTodoValue} />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <h4>To Do List</h4>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                {""}{todo.task}</span>
              &nbsp; &nbsp; &nbsp;  &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp; &nbsp; &nbsp;  &nbsp;
              <button onClick={markAsDone}>Mark As Done</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todo