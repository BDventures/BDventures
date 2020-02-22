import React, {useState} from 'react'

export const GuessInput = (initialValues) => {
  const [inputValues, setInputValues] = useState(initialValues)
  console.log(inputValues)

  return [inputValues, e => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }]
}