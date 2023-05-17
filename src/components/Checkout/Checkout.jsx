import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "firebase/firestore";
import firebase from "firebase";
import { getFirestore } from "../../firebase/config";

export const Checkout = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);

  const orden = {
    buyer:{
      email,
      nombre,
      apellido,
      telefono
    },
    item: carrito,
    total_price: precioTotal(),
    data: firebase.firestore.Timestamp.fromDate(new Date())
  }
  console.log(orden.buyer.nombre);
  console.log(orden);

  const db = getFirestore();
  const ordenes = db.collection('ordenes');

  ordenes.add(orden)
  .then((res) => {
    Swal.fire({
      icon: 'success',
      title: 'Su compra fue realizada con éxitos',
      text: `Guarde su numero de compra: ${res.id}`,
      willClose: () => {
        vaciarCarrito()
      }
    })
  })
  .finally(() => {
    console.log('Operacion realizada con exito')
  })


  carrito.forEach((item) => {
    const docRef = db.collection('productos').doc(item.id)

    docRef.get()
      .then((doc) => {
        docRef.update({
          stock: doc.data().stock - item.counter
        })
      })
  })
}









  return (
    <div>
        <h3 id="form-title">Checkout</h3>
      <hr />
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Nombre: </label>
          <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Apellido: </label>
          <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
        <div className="form-group">
          <label htmlFor="">Email: </label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Telefono: </label>
          <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
        </div>
        <button type="submit" className="btn btn-success">
          Finalizar
        </button>
        <Link to="/cart" className="btn btn-info">
          Volver al carrito
        </Link>
      </form>
    </div>
  );


};
