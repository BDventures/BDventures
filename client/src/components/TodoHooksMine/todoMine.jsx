import React, {useState, useEffect} from 'react'

export const TodoMine = ({todo, index, completeTodo, deleteTodo, addTodo}) => {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}

      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>X</button>
    </div>
  )
}