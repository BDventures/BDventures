import {useState, useEffect} from 'react'
import axios from 'axios'

export const useFetchData = (url) => {
  //state = original state, setState = setState
    //current state is an object where data is null, loading is true
  const[state, setState] = useState({data: null, loading: true})

  useEffect(() => {
    //first render = data is null, loading is true
    setState({
      data: state.data, loading: true
    })

    //call the numbers API, await the response, setState
      //data is now the response.data, loading is false
    let asyncFn = async() => {
      let response = await axios.get(url)
      console.log(response.data)
      let x = await response.data
      setState({
        data: x, loading: false
      })
    }
    //must call the asyncFn for it to run

    asyncFn()
    
    //set the dependency that useEffect will run only if
      //the url changes
  }, [url])

  //return the current state
  return state
}