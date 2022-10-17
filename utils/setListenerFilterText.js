import BSALESTORE from "../js/BSaleStore.js"
import DOMHandler from "../js/DOMHandler.js"
import getProductsByFilter from "./getProductsbyFilter.js"

// Método para establecer los lísteners ante el envento de búsqueda de un producto según texto ingresado en el buscador.
const setListenerFilterText = () => {
  const searchForm = document.querySelector(".search-form")
  searchForm.addEventListener("submit",async (e) => {
    e.preventDefault()
    const {input}  = e.target.elements
    console.log(input.value)
    BSALESTORE.query = input.value
    try {
      BSALESTORE.filter_products = await getProductsByFilter(input.value)
      BSALESTORE.current_category = -1
      BSALESTORE.search = true
      BSALESTORE.errors = null
      DOMHandler.reload()
    } catch(error) {
      console.log(error)
      BSALESTORE.errors = error.message
      DOMHandler.reload()
    }
  })
}

export default setListenerFilterText;