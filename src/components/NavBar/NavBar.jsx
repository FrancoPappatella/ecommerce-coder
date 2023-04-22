import React from "react";
import "./navBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg">
      <ul id="nav-items-list" className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Coffee Style
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/"  className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/productos/" className="nav-link">
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto/" className="nav-link">
            Contacto
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/nosotros/" className="nav-link">
            Sobre nosotros
          </Link>
        </li>
        <li className="nav-item" id="cart-container">
          <Link to="/cart" className="nav-link">
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
