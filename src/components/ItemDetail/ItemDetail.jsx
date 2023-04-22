import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ id, description, price, image, stock }) => {
  const navigate = useNavigate();

  const volverHaciaAtras = () => {
    navigate(-1);
  };

  const { addToCart } = useContext(CartContext);
  const [counter, setCounter] = useState(0);
  const sumarAlCarrito = () => {
    const newItem = {
      id,
      description,
      image,
      price,
      counter
    };
    addToCart(newItem);
  };

  return (
    <div id="detail-container">
      <h1>{description}</h1>
      <img className="item-img" src={image} />
      <p className="item-price">${price}</p>
      <div id="count-container">
        <ItemCount
          max={stock}
          modify={setCounter}
          cantidad={counter}
          className="item-count"
        />
      </div>
      <div id="button-container">
        <button className="btn btn-success" onClick={sumarAlCarrito}>Agregar al carrito</button>
        <button className="btn btn-primary" onClick={volverHaciaAtras}>
          Volver
        </button>
      </div>
    </div>
  );
};
