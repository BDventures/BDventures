import React, {useState, useEffect} from 'react'
import {Todo} from './todo.jsx'
import {TodoForm} from './todoForm.jsx';

const TodoHooks = () => {
  const [todos, setTodos] = useState([
    {
      text: 'have to finish FG script',
      isCompleted: false
    },
    {
      text: 'have to get back to the office',
      isCompleted: false
    },
    {
      text: 'have to head home after',
      isCompleted: false
    }
  ])
  
  const addTodo = text => {
    const newTodos = [...todos, {text}]

    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]

    newTodos[index].isCompleted = true;

    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos]

    newTodos.splice(index, 1)

    setTodos(newTodos)
  }

  return (
    <div className='todoParent'>
      <div className='todosChild'>
        {todos.map( (todo, index) => (
          <Todo key={index} index={index} todo={todo} addTodo={addTodo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
      </div>

      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoHooks