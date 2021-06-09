import React from "react";
import logo from "../../assets/img/logo.png";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" title="Logo" />
      </div>
      <ul className="main-nav">
        <li>
          <p className="nav-links">Variedades</p>
        </li>
        <li>
          <p className="nav-links">Cómo comprar?</p>
        </li>
        <li>
          <p className="nav-links">Envío</p>
        </li>
        <li>
          <p className="nav-links">Contactanos</p>
        </li>
      </ul>
    </nav>
  );
};
