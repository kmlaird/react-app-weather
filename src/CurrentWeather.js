import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="cw">
      <h2>Currently in city</h2>
      <div className="row ctemp">
        <div className="col ct">
          <div className="row">
            <div className="col">
              <p>icon</p>
              <p>description</p>
            </div>
            <div className="col">
              <p>icon</p>
              <p>description</p>
            </div>
          </div>
        </div>
        <div className="col ct">
          <p>Humidity</p>
          <p>Wind</p>
          <p>visibility</p>
        </div>
        <div className="col ct">
          <p>sunrise</p>
          <p>sunset</p>
        </div>
      </div>
    </div>
  );
}
