import queryToAPI from "./queryToApi.js"; 

// Método encargado de enviar el endpoint para obtener los todos los productos según una categoría escogida.
const getProductsByCategory = async (category) => {
  return queryToAPI(`products/category/${category}`);
}

export default getProductsByCategory;

