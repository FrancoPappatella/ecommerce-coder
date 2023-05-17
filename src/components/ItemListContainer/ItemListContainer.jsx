import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
//import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getFirestore } from "../../firebase/config";
export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();
  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    const productos = db.collection("producto");

    console.log('categoria')
    console.log(categoriaId)
    if (categoriaId) {
      const filtrado = productos.where("categoria", "==", categoriaId);
      filtrado
        .get()
        .then((res) => {
          const newItem = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setItems(newItem);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      productos
        .get()
        .then((res) => {
          const newItem = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          console.table(newItem);
          setItems(newItem);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoriaId]);

  return (
    <div id="item-list-container">
      {loading ? <h1>CARGANDO...</h1> : <ItemList productos={items} />}
    </div>
  );
};
