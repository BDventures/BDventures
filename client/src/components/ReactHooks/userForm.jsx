import {useState, useEffect} from 'react'

export const userForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  return [values, (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }]
}