import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  console.log(cities);
  if (cities) {
    return (
      <div className="cards">
        {cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            temp={c.temp}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
