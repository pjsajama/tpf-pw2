import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Personajes de Dragon Ball</h1>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Movies">Movies</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;