import { stock } from "../data/stock";

// Estableciendo función para obtener productos
export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
      reject("Rechazado");
    }, 1);
  });
};
