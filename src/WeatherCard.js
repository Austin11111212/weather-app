// WeatherCard.js

import React from 'react';

const WeatherCard = ({ data }) => {
  const { main, weather, wind } = data;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];
  const { speed } = wind;

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
      <p>Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
