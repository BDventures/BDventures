import React, { useState, useEffect } from "react";
import { TodoMine } from "./todoMine.jsx";
import { TodoMineForm } from './todoMineForm.jsx';

const TodoHooksMine = () => {
  const [todos, setTodos] = useState([
    {
      text: "watch NBA games",
      isCompleted: false
    },
    {
      text: "watch NFL games",
      isCompleted: false
    },
    {
      text: "watch NCAA games",
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}]

    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]

    newTodos[index].isCompleted = true

    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]

    newTodos.splice(index, 1)

    setTodos(newTodos)
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoMine key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
      ))}

      <div>
        <TodoMineForm addTodo={addTodo}/>
      </div>
    </div>
  );
};

export default TodoHooksMine;
