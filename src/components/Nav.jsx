import React from "react";
import SearchBar from "./SearchBar.jsx";
import nav from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={nav.nav}>
      <h1 className={nav.nav__text}>World Weather</h1>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
