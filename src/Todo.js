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
  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo, task: todo.task.toUpperCase(),
        };
      })
    );
  };
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo, isDone: true,
          };
        }
        else {
          return todo;
        }
      })
    );
  }

  return (
    <div className='flex flex-col justify-center items-center m-10 gap-14'>
      <h1 className='text-3xl font-bold text-white'>Task Manager</h1>
      <input className='w-64 p-2 h-10 rounded-lg' placeholder="Add a task" type="text" value={newTodo} onChange={updateTodoValue} />
      <button className='bg-emerald-500 text-white h-10 w-20 rounded-lg' onClick={addNewTask}>Add Task</button>
      <h4>To Do List</h4>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                {""}{todo.task}</span>
              <button className='bg-emerald-500 text-white h-10 w-20 rounded-lg' onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button className='bg-emerald-500 text-white h-10 w-20 rounded-lg' onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            </li>
          ))
        }
      </ul>
      <button className='bg-emerald-500 text-white h-10 w-20 rounded-lg' onClick={upperCaseAll}>UpperCase All</button>
    </div>
  )
}

export default Todo