import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <h2>Forecast</h2>
        <div className="row">
          <div className="col fcast">
            <p className="fcast-day">
              <strong>{forecast[0].dt}</strong>
            </p>
            <WeatherIcon code={forecast[0].weather[0].icon} />
            <p>
              <span className="max-temp">
                {Math.round(forecast[0].temp.max)}°F
              </span>{" "}
              |{" "}
              <span className="min-temp">
                {Math.round(forecast[0].temp.min)}°F
              </span>
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
