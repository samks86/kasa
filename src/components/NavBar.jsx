import React from 'react';
import "./NavBar.scss"
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">
        <div className="navbar_logo">
        <img src="./src/assets/logo.png" alt="logo kasa"/>
        </div>
        </NavLink>
        <NavLink to="/">
        <div>Accueil</div>
        </NavLink>
        <NavLink to="/about">
        <div>A propos</div>
        </NavLink>
    </nav>
  );
}

export default NavBar