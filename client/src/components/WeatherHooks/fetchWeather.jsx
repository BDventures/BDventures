import {useState, useEffect} from 'react'
import axios from 'axios'

export const fetchWeather = (url, loading) => {
  console.log(url, loading)
  const [weather, setWeather] = useState({})

  useEffect(() => {
    let asyncFn = async () => {
      let response = await axios.get(url)
      let x = await response.data;
      console.log(x, 'this is x')
      //x.name, x.weather[0].main, x.weather[0].description
      if(x.wind.speed > 3) x.wind.speed = 'Lots of Wind'
      else x.wind.speed = 'Little Bit of Wind'
      setWeather({
        cityName: x.name, weather: x.weather[0].main, description: x.weather[0].main, windSpeed: x.wind.speed})
    }
    asyncFn()
  }, [loading])
  console.log(weather, 'this the weather')
  return weather;
}