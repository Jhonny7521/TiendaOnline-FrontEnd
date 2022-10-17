import queryToAPI from "./queryToApi.js";

// Método encargado de enviar el endpoint para obtener los todos los productos según el txto ingresado en el buscador.
const getProductsByFilter = async (filterText) => {
  return queryToAPI(`products/${filterText}`);
}

export default getProductsByFilter;