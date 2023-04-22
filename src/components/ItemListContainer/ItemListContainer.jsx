import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pedirProductos()
      .then((res) => {
        setItems(res);
        console.log(res);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div id="item-list-container">
      {loading ? <h1>CARGANDO...</h1> : <ItemList productos={items} />}
    </div>
  );
};
