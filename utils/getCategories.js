import queryToAPI from "./queryToApi.js";

// Método encargado de enviar el endpoint para obtener las categorías de productos.
const getCategories = async () => {
  return queryToAPI('categories/');
}

export default getCategories;