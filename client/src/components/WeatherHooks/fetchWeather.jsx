import {useState, useEffect} from 'react'
import axios from 'axios'

export const fetchWeather = (url, loading) => {
  console.log(url, loading)
  const [weather, setWeather] = useState({})

  useEffect(() => {
    let asyncFn = async () => {
      let response = await axios.get(url)
      let x = await response.data;
      let weatherTemp = await Math.floor((x.main.temp-273.15)*1.8)+32
      console.log(typeof weatherTemp, 'this is weather temp')
      if(x.wind.speed > 3) x.wind.speed = 'Lots of Wind'
      else x.wind.speed = 'Little Bit of Wind'
      setWeather({
        cityName: x.name, temperature: weatherTemp, description: x.weather[0].description, windSpeed: x.wind.speed})
    }
    asyncFn()
  }, [loading])
  // console.log(weather, 'this the weather')
  return weather;
}