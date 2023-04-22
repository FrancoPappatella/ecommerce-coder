import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import "../CartScreen/CartScreen.css";
import { Link } from "react-router-dom";

export const CartScreen = () => {
  const { precioTotal, removerItem, carrito, vaciarCarrito } =
    useContext(CartContext);
  return (
    <div id="listado">
      {
        carrito.length === 0 ? (
          <>
            <h3>Carrito vacío</h3>
            <Link to="/" className="btn btn-success">Volver a comprar</Link>
          </>
        ) : (
          <>
            {carrito.map((prod) => (
              <div id="cart-screen-container">
                <h3>Resumen de compras</h3>
                <hr />
                <div className="cart-product-container">
                  <p>Producto</p>
                  <p>$</p>
                  <p>Cantidad: </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removerItem(prod.id)}
                  >
                    <BsFillTrashFill></BsFillTrashFill>
                  </button>
                </div>
              </div>
            ))}
            <strong>Precio total: {precioTotal}</strong>
            <button className="btn btn-danger" onClick={() => vaciarCarrito()}>
              Vaciar carrito
            </button>
          </>
        )
        /*
        ------------------TODAVÍA EN DESARROLLO------------------
        */
      }
    </div>
  );
};
