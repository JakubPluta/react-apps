/** @format */

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const getCurrentTime = () => {
    const currDate = new Date().toLocaleString() + "";
    return currDate;
  };

  useEffect(() => {
    const currTime = getCurrentTime();
    setTime(currTime);
  });

  const searchLocation = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      axios.get(weatherUrl).then((res) => {
        setWeatherData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{time}</p>
            <p>{weatherData.name}</p>
          </div>
          <div className="temp">
            {weatherData.main ? (
              <h1>{weatherData.main.temp.toFixed()}°C</h1>
            ) : null}
          </div>
        </div>
        {weatherData.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {weatherData.main ? (
                <p className="bold">
                  {weatherData.main.feels_like.toFixed()}°C
                </p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {weatherData.main ? (
                <p className="bold">{weatherData.main.humidity}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {weatherData.wind ? (
                <p className="bold">{weatherData.wind.speed.toFixed()} KM/H</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
