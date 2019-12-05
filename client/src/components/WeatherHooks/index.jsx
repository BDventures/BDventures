import React, { useState, useEffect } from "react";
import { userForm } from "../ReactHooks/userForm.jsx";
import { fetchWeather } from "./fetchWeather.jsx";
const weatherKey = process.env.apiWeatherKey;

const WeatherHooks = () => {
  let [loading, setLoading] = useState(true);
  const [city, handleCity] = userForm("");
  const [finalCity, setFinalCity] = useState("");
  const { cityName, weather, description, windSpeed } = fetchWeather(
    `https://api.openweathermap.org/data/2.5/weather?q=${finalCity},uk&appid=${weatherKey}`,
    loading
  );
  console.log(city, "city data");
  console.log(cityName, weather, description, windSpeed, "what is this data");
  console.log(finalCity, "final city");
  console.log(loading, "this load");

  useEffect(() => {
    const changeLoading = () => {
      setLoading(!loading);
    };

    if (finalCity !== "") {
      changeLoading();
    }
  }, [finalCity]);

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
