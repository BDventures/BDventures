import React, {useState, useEffect} from 'react'

export const Todo = ({todo, index}) => {
  return(
    <div className='todo'>
      {todo.text}
    </div>
  )
}