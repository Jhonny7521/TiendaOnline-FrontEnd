import categoryList from "../components/categoryList.js";
import Header from "../components/Header.js";
import productCard from "../components/productCard.js";
import BSALESTORE from "../js/BSaleStore.js";

// Función que retorna la estructura de la SPA.
function view(){
  return `
    ${Header}
    <div class="container-general">
      ${categoryList}
      <div class="products-container">
      ${ BSALESTORE.errors ? `<p class="error">${BSALESTORE.errors}</p>` : "" }
        ${ BSALESTORE.search && BSALESTORE.filter_products.length == 0 ? 
          `<p class="message">No se encontraron productos para "${BSALESTORE.query}"</p>` : ""
        }
        ${ BSALESTORE.search ? BSALESTORE.filter_products.map(productCard).join("") : BSALESTORE.active_category ? BSALESTORE.filter_products.map(productCard).join("") : BSALESTORE.products.map(productCard).join("") }
        </div>
    </div>
    `;
}

// Clase "Home" con los métodos toString() para renderizar los componentes de la SPA y setListeners() 
// que establece los listeners para los eventos de selección de una categoria ó de busqueda de productos 
// por texto.
const Home = {
  toString(){
    return view();
  },
  setListeners(){
    Header.setListeners(),
    categoryList.setListeners()
  }
}
export default Home;