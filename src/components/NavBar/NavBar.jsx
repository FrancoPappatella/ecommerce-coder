import React from "react";
import "./navBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav id="nav-bar" class="navbar navbar-expand-lg">
      <ul id="nav-items-list" class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
            Coffee Style
          </a>
        </li>
        <li class="nav-item active">
          <a href="#" class="nav-link">
            Inicio
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Producto
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Contacto
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Sobre nosotros
          </a>
        </li>
        <li class="nav-item" id="cart-container">
          <a href="#" class="nav-link">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
};
