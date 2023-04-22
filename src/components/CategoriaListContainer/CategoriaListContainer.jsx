import React from "react";
import "./CategoriaListContainer.css";
import {Link} from "react-router-dom";

export const CategoriaListContainer = () => {
  return (
    <div id="categoria-container">
      <h4 id="filter-title">Filtros</h4>
      <hr />
      <div id="filters-container">
          <ul id="filter-list">
            <li>
            <Link to={`/categoria/${'1'}`} className="radio-label">Café</Link>
            </li>
            <li>
              <Link to={`/categoria/${'2'}`} className="radio-label">Molinos</Link>
            </li>
            <li>
              <Link to={`/categoria/${'3'}`} className="radio-label">Tazas</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};
