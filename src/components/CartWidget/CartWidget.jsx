import React,  { useContext } from "react";
import { BsFillBagFill } from 'react-icons/bs';
import '../CartWidget/cartWidget.css';
import { CartContext } from "../context/CartContext";


export const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext);
  return (
    <div id='nav-icon-container'>
      <BsFillBagFill id='bag-icon'/>
      <p id='product-quantity'>{calcularCantidad()}</p>
    </div>
  )
}


