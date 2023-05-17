import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";
import {CategoriaListContainer} from "../CategoriaListContainer/CategoriaListContainer";

export const ItemList = ({ productos = [] }) => {
  return (
    <div className="item-list-container">
      {/*<CategoriaListContainer/>*/}
      {productos.map((item) => (
        <Item {...item} key={item.id}/>
      ))}
    </div>
  );
};
