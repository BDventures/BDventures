import React, {useState, useEffect} from 'react'
import {GuessInput} from './guessInput.jsx';

export const Guess = () => {
  const initialCount = 0
  const [counter, setCounter] = useState(initialCount)
  const [values, setValues] = GuessInput({firstname: '', lastname: ''})
  // console.log(values)

  return(
    <div>
      <input placeholder="first name" name='firstname' onChange={setValues}></input>
      <input placeholder="last name" name='lastname' onChange={setValues}></input>
    </div>
  )
}