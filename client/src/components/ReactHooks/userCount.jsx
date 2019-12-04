import {useState} from 'react'

export const useCount = (num) => {
  const [count, setCount] = useState(num)

  return [count, () => {
    setCount(count + 1)
  }]
}