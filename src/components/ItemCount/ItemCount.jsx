import { useNavigate } from "react-router-dom";
import "./ItemCount.css";

export const ItemCount = ({ max, cantidad, modify }) => {
  const sumar = () => {
    if (cantidad < max) {
      modify(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      modify(cantidad - 1);
    }
  };

  return (
    <div>
      <h4>Cantidad de productos: {cantidad} </h4>

      <div id="btn-container">
        <button className="btn btn-success md-2" onClick={sumar}>
          +
        </button>
        <button className="btn btn-danger md-2" onClick={restar} id="restar">
          -
        </button>
      </div>
    </div>
  );
};
