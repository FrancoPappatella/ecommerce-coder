import { useNavigate } from "react-router-dom";
import "./ItemCount.css";

export const ItemCount = ({max, cantidad, modify}) => {


  const sumar = () => {
    if(cantidad < max){
      modify(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      modify(cantidad - 1);
    }
  };

  return (
    <div id="item-count-container">
      <h4>Cantidad de productos: {cantidad} </h4>

      <div className="btn-container">
        <button onClick={sumar}>➕</button>
        <button onClick={restar} id="restar">
          ➖
        </button>
      </div>
    </div>
  );
};
