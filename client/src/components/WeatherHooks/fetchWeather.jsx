import {useState, useEffect} from 'react'
import axios from 'axios'

export const fetchWeather = (url) => {
  const [weather, setWeather] = useState({data: null, loading: true})
  useEffect(() => {
    setWeather({
      data: weather.data, loading: true
    })
    
    let getWeatherData = async() => {
      try {
        let weatherData = await axios.get(url)
        console.log(weatherData, 'this is weather data')
        setWeather({
          data: weatherData.data, loading: false
        })
      } catch(e) {
        console.log(e, 'error')
      }
    }
    
    getWeatherData()
  }, [url])

  return weather
}