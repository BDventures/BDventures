import React, { useState, useEffect } from "react";
import { fetchNumberData } from "./fetchNumberData";
import {makeForm} from './makeForm';

export const NumbersAPI = () => {
  const initialValue = 44
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(initialValue)
  const [data, handleChange] = makeForm('')
  const api = fetchNumberData(`http://numbersapi.com/${value}`, value, loading);

  const changeToNewNumber = () => {
    setValue(data.newNumber)
    setLoading(false)
  }

  return(
    <div>
      {loading ? <div>...loading <input name='newNumber' onChange={handleChange}></input>
      <button onClick={changeToNewNumber}></button> </div>: <div>
      {api}
      <input name='newNumber' onChange={handleChange}></input>
      <button onClick={changeToNewNumber}></button>        
        </div>}
    </div>
  )
};
