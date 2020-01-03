import React, {useState, useEffect} from 'react';

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    if(!value) return;

    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder='add new todo' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
    </form>
  )
}