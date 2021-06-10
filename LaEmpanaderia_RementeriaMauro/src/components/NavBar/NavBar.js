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
          <p className="nav-links">VARIEDADES</p>
        </li>
        <li>
          <p className="nav-links">CÓMO COMPRAR?</p>
        </li>
        <li>
          <p className="nav-links">DELIVERY</p>
        </li>
        <li>
          <p className="nav-links">CONTACTANOS</p>
        </li>
      </ul>
    </nav>
  );
};
