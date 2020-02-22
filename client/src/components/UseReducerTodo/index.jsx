import React, {useState, useEffect, useReducer} from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': return state+1;
    case 'decrement': return state-1;
    default: return state
  }
}

export const UseReducerTodo = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return(
    <div>
      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
      <div>count: {count}</div>
      <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
    </div>
  )
}