import React, {useState, useEffect} from 'react'

export const TodoMine = ({todo, index, completeTodo, deleteTodo}) => {
  return(
    <div>
      {todo.text}

      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>X</button>
    </div>
  )
}