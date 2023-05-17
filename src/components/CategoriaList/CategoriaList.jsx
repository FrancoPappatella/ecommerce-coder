import "./CategoriaList.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";
import { pedirProductos } from "../../helpers/pedirProductos";
import { CategoriaListContainer } from "../CategoriaListContainer/CategoriaListContainer";

export const CategoriaList = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirProductos()
      .then((res) => {
        /*setItems( res.find( prod => prod.id === Number(categoriaId)))*/
        console.log("------------------ CATEGORIA " + categoriaId);
        setItems(
          res.filter((producto) => producto.categoria == Number(categoriaId))
        );
        console.log(items);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  return (
    <section>
      {loading ? (
        <h1>CARGANDO...</h1>
      ) : (
        <div id="filtered-products">
         { /*<CategoriaListContainer />*/ }
          {items.map((item) => (
            <Item {...item} key={item.id} />
          ))}
        </div>
      )}
    </section>
  );
};
