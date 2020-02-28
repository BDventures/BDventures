import React, {useState, useEffect, useReducer} from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case 'add-todo': return {todos: [...state.todos, {text: action.text}]};
    default: return state
  }
}

export const UseReducerTodo = () => {
  const [text, setText] = useState('')
  const [{todos}, dispatch] = useReducer(reducer, {todos: []})
  console.log(todos, 'todos')
  return(
    <div>
      <h2>Use Reducer Todo</h2>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({type: 'add-todo', text})
        setText('')
      }}>
        <input value={text} placeholder='add todos..' onChange={e => setText(e.target.value)}></input>
      </form>
      {todos.map(t => <div>{t.text}</div>)}
    </div>
  )
}