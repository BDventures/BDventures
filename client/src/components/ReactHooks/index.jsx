import React, { useState } from "react";
import {useForm} from './userForm.jsx';

const ReactHooks = () => {
  //button onClick = (setCount(count+1))

  //const [{count, count2}, setCount] = useState({count: 10, count2: 20})
  //if you want to update only one and keep the count2 value
  //setCount(currentState => ({...currentState, count: currentState.count +1}))

  //you can have as many useState as you want
  // const [count, setCount] = useState(10);


//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   <input
//   name="email"
//   value={email}
//   onChange={e => setEmail(e.target.value)}
// </input>
// <input
//   type="password"
//   name="password"
//   value={password}
//   onChange={e => setPassword(e.target.value)}
// ></input>

  const [values, handleChange] = useForm({email: '', password: ''})
  return (
    <div>
      {/* <button onClick={() => setCount(currentCount => currentCount+1)}>+</button>
      {count}
      <button onClick={() => setCount(currentCount => currentCount-1)}>-</button> */}
      
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
