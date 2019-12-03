import {useState} from 'react'

export const useCount = (num) => {
  const [number, setNumber] = useState(num) 

  return [number, () => {
    setNumber(c => c+1)
  }]
}