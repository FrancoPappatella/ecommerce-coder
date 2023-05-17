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
          <Link to="/productos/" className="nav-link">
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/categoria/${'1'}`} className="nav-link">
            Café
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/categoria/${'2'}`} className="nav-link">
            Tazas
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/categoria/${'3'}`} className="nav-link">
            Molinos
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
