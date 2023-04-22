import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, description, image, price }) => {
  console.log(id, description, image, price);
  return (
    <div id="item-container">
        <p id="item-description">{description}</p>
        <img src={image} id="item-img" />
        <h5 id="item-price">${price}</h5>
        <div className="btn-container">
          <Link to={`/detail/${id}`}>
          <button className="btn btn-primary">Lo quiero</button>
          </Link>
        </div>
    </div>
  );
};
