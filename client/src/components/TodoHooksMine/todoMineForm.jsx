import React, {useState, useEffect} from 'react'

export const TodoMineForm = ({addTodo}) => {
  const [value, setValue] = useState('')
  //handle submit that add the todo
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!value) return;
    
    addTodo(value)
    setValue('')
    console.log(value, 'this is value')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder='add todo..'type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
    </form>
  )
}