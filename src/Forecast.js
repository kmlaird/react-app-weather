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

  function formatDay(timestamp) {
    let date = new Date(timestamp);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  if (loaded) {
    return (
      <div className="forecast">
        <h2>Coming Up</h2>
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 6 && index > 0) {
              return (
                <div className="col fcast" key={index}>
                  <p className="fcast-day">
                    <strong>{formatDay(forecast[index].dt * 1000)}</strong>
                  </p>
                  <WeatherIcon code={forecast[index].weather[0].icon} />
                  <p>
                    <span className="max-temp">
                      {Math.round(forecast[index].temp.max)}°F
                    </span>{" "}
                    |{" "}
                    <span className="min-temp">
                      {Math.round(forecast[index].temp.min)}°F
                    </span>
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates?.lat}&lon=${props.coordinates?.lon}&appid=c8735bb7e8e2f8d8a38c7501f3cd47d3&units=imperial`;
    axios.get(url).then(showForecast);
  }
}
