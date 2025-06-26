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
    <div className='flex flex-col justify-center items-center m-10 gap-10 h-full w-full'>
      <h1 className='text-5xl font-extrabold text-white'>Task Manager</h1>
      <input className='w-64 p-2 h-10 rounded-lg border-2' placeholder="Add a task" type="text" value={newTodo} onChange={updateTodoValue} />
      <button className='bg-emerald-500 text-white h-10 w-24 text-lg rounded-lg hover:bg-emerald-300' onClick={addNewTask}>Add Task</button>
      <h4 className='text-2xl font-bold text-white'>To Do List</h4>
      <div className='flex flex-col w-full justify-center items-center'>
        <ul className='m-0 text-l text-white'>
          {
            todos.map((todo) => (
              <li key={todo.id}>
                <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                  {""}{todo.task}</span>
                <button className='bg-emerald-500 text-white h-10 w-24 rounded-lg m-6 text-lg hover:bg-emerald-300' onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button className='bg-emerald-500 text-white h-10 w-32 rounded-lg m-6 text-lg hover:bg-emerald-300' onClick={() => markAsDone(todo.id)}>Mark As Done</button>
              </li>
            ))
          }
        </ul>
      </div>
      <button className='bg-emerald-500 text-white h-10 w-32 rounded-lg text-lg hover:bg-emerald-300' onClick={upperCaseAll}>UpperCase All</button>
    </div>
  )
}

export default Todo