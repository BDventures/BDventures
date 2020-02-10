import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const fetchNumberData = (url, value, loading) => {
  const [number, setNumber] = useState('')

  useEffect(() => {
    let asyncFetchNumber = async() => {
      let {data} = await axios.get(url)
      setNumber(data)

    }
    asyncFetchNumber()
    
  }, [value, loading])
  return number
}