import React, { useState, useEffect } from "react";
import {userForm} from './userForm.jsx';
import {useCount} from './userCount.jsx';
import {useFetchData} from './useFetchData.jsx';
import axios from 'axios'

const ReactHooks = () => {
  const[count, handleChange] = useCount(0)
  const [initialCount, setInitialCount] = useState(0)

  const [values, setValues] = userForm({email: '', password: ''})

  const [counter, setCounter] = useState(1)

  //this is state.data, loading.data from useFetchData fn
  const {data, loading} = useFetchData(`http://numbersapi.com/${counter}/trivia`)
  console.log(data, 'data')
  console.log(loading, 'loading')
  return (
    <div>

      <div>{!data ? 'loading...' : data}</div>
      <button onClick={() => setCounter(c => c+1)}>{counter}</button>

      <input name='email' placeholder='email' onChange={setValues}></input>
      <input name='password' placeholder='password' onChange={setValues}></input>


      <button onClick={handleChange}>+</button>
      {count} / {initialCount}
      <button onClick={() => setInitialCount(initialCount => initialCount-1)}>-</button>
    </div>
  );
};

export default ReactHooks;
