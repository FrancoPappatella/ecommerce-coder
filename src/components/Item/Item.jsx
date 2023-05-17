import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, description, image, price }) => {
  console.log(id, description, image, price);
  return (
    <div id="item-container">
        <h2 id="item-description">{description}</h2>
        <img src={image} id="item-img" />
        <h5 id="item-price">${price}</h5>
        <div className="btn-container">
          <Link to={`/detail/${id}`}>
            <center>
          <button className="btn btn-primary">Lo quiero</button>
            </center>
          </Link>
        </div>
    </div>
  );
};
