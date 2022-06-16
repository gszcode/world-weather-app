import React, { useState } from "react";
import search from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      className={search.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        className={search.input}
        placeholder="Search City..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={search.form__btn}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
