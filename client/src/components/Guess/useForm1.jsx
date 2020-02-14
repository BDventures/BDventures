import React, {useState} from 'react'

export const UseForm1 = (initialValues) => {
  console.log('hi')
  const [value, setValue] = useState(initialValues)

  return [value, (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }]
}