import React, { useState, useEffect } from "react";
import {useForm} from './userForm.jsx';
import {useCount} from './userCount.jsx';
import axios from 'axios'

const ReactHooks = () => {
  const [values, handleChange] = useForm({email: '', password: ''})
  const [number, setNumber] = useCount(0)

  //useEffect = everytime a component renders or re-renders, this fn will get called
  useEffect(() => {
    console.log('render')

    //the return is called a clean-up function, which means
    //you can add all your clean up logic
    return () => {
      console.log('unmount')
    } 
  }, [number])

  return (
    <div>

      <div>{number}</div>
      <button onClick={setNumber}>increment</button>
      
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default ReactHooks;
