import React, { useState, useEffect } from "react";
import { userForm } from "../ReactHooks/userForm.jsx";
import { fetchWeather } from "./fetchWeather.jsx";
const weatherKey = process.env.apiWeatherKey;

const WeatherHooks = () => {
  let [loading, setLoading] = useState(true);
  const [city, handleCity] = userForm("");
  const [finalCity, setFinalCity] = useState("");

  //same thing as weather.cityName ///this.state.cityName since im returning weather from fetchWeather
  const { cityName, weather, description, windSpeed } = fetchWeather(
    `https://api.openweathermap.org/data/2.5/weather?q=${finalCity},uk&appid=${weatherKey}`,
    loading
  );
  console.log(city, 'this is the city')

  useEffect(() => {
    const changeLoading = () => {
      setLoading(!loading);
    };

    if (finalCity !== "") {
      changeLoading();
    }
  }, [finalCity]);

  //save data to local storage
  // useEffect(() => {
  //   localStorage.setItem('city name', finalCity)
  // }, [finalCity])

  return (
    <div>
      <input placeholder="enter city" name="city" onChange={handleCity}></input>
      <button onClick={() => setFinalCity(city.city)}>Get Weather</button>

      <div>
        {!finalCity ? "loading city data" : 
        <div>
          <div>City: {cityName}</div>
          <div>Weather: {weather}</div>
          <div>Description: {description}</div>
          <div>Windy: {windSpeed}</div>
        </div>
        }
      </div>
    </div>
  );
};

export default WeatherHooks;
