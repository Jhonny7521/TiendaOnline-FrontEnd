import BSALESTORE from "../js/BSaleStore.js";
import setListenerCategories from "../utils/setListenerCategories.js";

//Función que retorna la estructura de la lista de categorias de la SPA.
const view = () => {
  const activeCategory = BSALESTORE.active_category;
  return `
    <div class="category-container">
      <h5>Categorías</h5>
      <div class="categories">
        <ul class="category-list">
          <a href="#" class="${activeCategory == 0 ? "active-category" : "" }" data-idcategory="0">
            Todas las categorias
          </a>
          ${ BSALESTORE.categories.map( category => (
            `
              <a href="#" class="${activeCategory == category.id ? "active-category" : "" }" data-idcategory="${category.id }">
                ${ category.name }
              </a>
            `
          )).join("")}
        </ul>
      </div>
    </div>
  `;
} 

// Clase "categoryList" con los métodos toString() para renderizar el componente correspondiente a la 
// lista de categorias y setListeners() que establece los listeners para el eventos de selección
// de una categoria.
const categoryList = {
  toString(){
    return view()
  },
  setListeners(){
    setListenerCategories()
  }
}

export default categoryList;