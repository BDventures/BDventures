import React, {useState, useEffect} from 'react'
import {Todo} from './todo.jsx'

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

  return (
    <div className='todoParent'>
      <div className='todosChild'>
        {todos.map( (todo, index) => (
          <Todo key={index} index={index} todo={todo}/>
        ))}
      </div>
    </div>
  )
}

export default TodoHooks