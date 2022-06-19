import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
let apiKey = process.env.REACT_APP_API_KEY;

export default function App() {
  const [cities, setCities] = useState([]);
  // buscar ciudad
  function onSearch(ciudad) {
    fetch(
      // llamada a la api
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const repeat = cities.find((city) => city.id === ciudad.id);
          if (!repeat) setCities((oldCities) => [...oldCities, ciudad]);
          else alert("Ciudad en pantalla");
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  // eliminar ciudad
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
