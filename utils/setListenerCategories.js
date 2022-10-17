import BSALESTORE from "../js/BSaleStore.js";
import DOMHandler from "../js/DOMHandler.js";
import getProductsByCategory from "./getProductsByCategory.js";

// Método para establecer los listeners de los eventos de seleccion de una categoría de productos.
const setListenerCategories = () => {
  const linkCategory = document.querySelector(".category-list")
  linkCategory.addEventListener("click", async (e) => {
    e.preventDefault();
    BSALESTORE.active_category = Number(e.target.dataset.idcategory)
    console.log(BSALESTORE.active_category)
    try {
      BSALESTORE.filter_products = await getProductsByCategory(BSALESTORE.active_category)
      BSALESTORE.search = false
      BSALESTORE.errors = null
      DOMHandler.reload()
    } catch(error) {
      console.log(error)
      BSALESTORE.errors = error.message
      DOMHandler.reload()
    }
  })
}

export default setListenerCategories;