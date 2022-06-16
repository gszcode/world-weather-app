import React from "react";
import "./Card.css";

export default function Card({ min, max, name, img, onClose, temp }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose}>X</button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <div className="col-sm-4 col-md-4 col-lg-4 mx-auto">
          <strong>
            Temp <br />
          </strong>
          <strong>{temp}°</strong>
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
