import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return(
    <ul className="nav justify-content-center navArea">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/characters" className="nav-link">Characters</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/planets" className="nav-link">Planets</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/starships" className="nav-link">Starships</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/vehicles" className="nav-link">Vehicles</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/saved" className="nav-link">Saved</NavLink>
      </li>
    </ul>
  )
}

export default Nav;