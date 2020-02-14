import React, {useState, useEffect} from 'react'
import {UseForm1} from './useForm1'

export const Guess = () => {
  const initialCount = 0
  const initialValue = 0
  const [count, setCount] = useState(initialCount)
  const [values, setValues] = UseForm1({name: '', email: ''})
  const [newValues, setNewValues] = useState('')
  
  const increment = () => {
    // setCount(count + 1)
    setCount(c => c+1)
  }

  return(
    <div className='guessComponent'>
      {count}<button onClick={increment}>Increment</button><button onClick={() => setCount(count - 1)}>Decrement</button>
      <input onChange={setValues} name='name'></input>
      <input onChange={setValues} name='email'/>
      <input onChange={(e) => setNewValues(e.target.value)}/>
    </div>
  )
}