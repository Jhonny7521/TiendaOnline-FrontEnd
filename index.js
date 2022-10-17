import BSALESTORE from "./js/BSaleStore.js";
import DOMHandler from "./js/DOMHandler.js";
import Home from "./pages/Home.js";
import getAllProducts from "./utils/getAllProducts.js";
import getCategories from "./utils/getCategories.js";

// función INIT() encargarda de obtener los productos y cargarlos en el DOM al cargar la página.
async function init(){
  try {
    BSALESTORE.categories = await getCategories();
    BSALESTORE.products = await getAllProducts();
    BSALESTORE.errors = null
    DOMHandler.load(Home)
  } catch (error) {
    console.log(error)
    BSALESTORE.errors = error.message
    DOMHandler.load(Home)
  }
}

init();

