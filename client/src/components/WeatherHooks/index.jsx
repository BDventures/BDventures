import React, {useState, useEffect} from 'react';
import {userForm} from '../ReactHooks/userForm.jsx';
import {fetchWeather} from './fetchWeather.jsx';
const weatherKey = process.env.apiWeatherKey;

const WeatherHooks = () => {
  const [city, handleCity] = userForm({city: ''})
  
  const {data} = fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${weatherKey}`)
  console.log(city.city, 'city data')
  console.log(data, 'what is this data')
  return (
    <div>
      <input placeholder='enter city' name='city' onChange={handleCity}></input>
      <button>Get Weather</button>

      <div>{!data ? 'loading city data' : city}</div>
    </div>
  )
}

export default WeatherHooks;