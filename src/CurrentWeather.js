import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [loaded, setLoaded] = useState(false);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setIcon(response.data.weather[0].icon);
    setDescription(response.data.weather[0].main);
    setTemperature(response.data.main.temp);
    setFeelsLike(response.data.main.feels_like);
    setMaxTemp(response.data.main.temp_max);
    setMinTemp(response.data.main.temp_min);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setSunrise(formatDate(response.data.sys.sunrise * 1000));
    setSunset(formatDate(response.data.sys.sunset * 1000));
    setCoordinates(response.data.coord);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function formatDate(timestamp) {
    let now = new Date(timestamp);
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  if (loaded) {
    return (
      <div className="cw">
        <h2>Currently in {props.city}</h2>
        <div className="row ctemp">
          <div className="col ct">
            <div className="row">
              <div className="col">
                <div id="w-icon">
                  <WeatherIcon code={icon} />
                </div>
                <p>{description}</p>
              </div>
              <div className="col">
                <h3>
                  {Math.round(temperature)}
                  <span id="degree">°F</span>
                </h3>
                <p>Feels like {Math.round(feelsLike)}°F</p>
              </div>
            </div>
          </div>
          <div className="col ct">
            <p>
              <span className="max-temp">{Math.round(maxTemp)}°F</span> |{" "}
              <span className="min-temp">{Math.round(minTemp)}°F</span>
            </p>
            <p>Humidity: {Math.round(humidity)}%</p>
            <p>Wind: {Math.round(wind)} mph</p>
          </div>
          <div className="col ct">
            <div className="row">
              <div className="col">
                <a
                  href="https://www.flaticon.com/free-icons/sunrise"
                  title="sunrise icons"
                >
                  <img src="./images/sunrise.png" alt="sunrise icon" />
                </a>
                <p>{sunrise}</p>
              </div>
              <div className="col">
                <a
                  href="https://www.flaticon.com/free-icons/sunset"
                  title="sunset icons"
                >
                  <img src="./images/sunset.png" alt="sunset icon" />
                </a>
                <p>{sunset}</p>
              </div>
            </div>
          </div>
        </div>
        <Forecast city={props.city} coordinates={coordinates} />
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=667d9f573c8af4c33457be5d561a9148&units=imperial`;
    axios.get(url).then(showWeather);
  }
}
