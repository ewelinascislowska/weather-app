import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    error,
  } = props.weather;

  let content = null;
  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h1>{city}</h1>
        <h2>Dane dla {date}</h2>
        <div className="bgTemp">
          <h3 className="temp">{temp} &#176; C</h3>
        </div>
        <h3>Wschód słońca o {sunriseTime}</h3>
        <h3>Zachód słońca o {sunsetTime}</h3>
        <h3>Siła wiatru {wind} m/s</h3>
        <h3>Ciśnienie {pressure} hPa</h3>
      </>
    );
  }
  return (
    <div className="result">
      {error ? `Nie mamy w bazie miejscowości ${city}` : content}
    </div>
  );
};

export default Result;
