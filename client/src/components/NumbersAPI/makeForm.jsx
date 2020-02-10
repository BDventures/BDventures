import React, {useState, useEffect} from 'react'

export const makeForm = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return [value, e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }]
}