import React from 'react';
import "./NavBar.css"
function NavBar() {
  return (
    <nav className="NavBar">
        <div className="navbar_logo">
        <img src="./src/assets/logo.png" alt="logo kasa"/>
        </div>
        <div>Accueil</div>
        <div>A propos</div>
    </nav>
  );
}

export default NavBar