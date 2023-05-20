import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [icon, setIcon] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    setMaxTemp(response.data.daily[0].temp.max);
    setMinTemp(response.data.daily[0].temp.min);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
    );
  }

  if (loaded) {
    return (
      <div className="forecast">
        <h2>Forecast</h2>
        <div className="row">
          <div className="col fcast">
            <img src={icon} alt="Icon" />
            <p>
              <span className="max-temp">{Math.round(maxTemp)}°F</span> |{" "}
              <span className="min-temp">{Math.round(minTemp)}°F</span>
            </p>
          </div>
          <div className="col fcast">
            <img src={icon} alt="Icon" />
            <p>
              <span className="max-temp">{Math.round(maxTemp)}°F</span> |{" "}
              <span className="min-temp">{Math.round(minTemp)}°F</span>
            </p>
          </div>
          <div className="col fcast">
            <img src={icon} alt="Icon" />
            <p>
              <span className="max-temp">{Math.round(maxTemp)}°F</span> |{" "}
              <span className="min-temp">{Math.round(minTemp)}°F</span>
            </p>
          </div>
          <div className="col fcast">
            <img src={icon} alt="Icon" />
            <p>
              <span className="max-temp">{Math.round(maxTemp)}°F</span> |{" "}
              <span className="min-temp">{Math.round(minTemp)}°F</span>
            </p>
          </div>
          <div className="col fcast">
            <img src={icon} alt="Icon" />
            <p>
              <span className="max-temp">{Math.round(maxTemp)}°F</span> |{" "}
              <span className="min-temp">{Math.round(minTemp)}°F</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates?.lat}&lon=${props.coordinates?.lon}&appid=c8735bb7e8e2f8d8a38c7501f3cd47d3&units=imperial`;
    axios.get(url).then(showForecast);
  }
}
