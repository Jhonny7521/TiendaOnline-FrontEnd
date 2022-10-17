import queryToAPI from "./queryToApi.js";

// Método encargado de enviar el endpoint para obtener los todos los productos del servidor.
const getAllProducts = async () => {
  return queryToAPI(`products/`);
}

export default getAllProducts;


