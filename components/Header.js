import setListenerFilterText from "../utils/setListenerFilterText.js";

//Función que retorna la estructura del Header de la SPA.
const view = () =>{
  return `
  <div class="container-header">
    <div class="header">
      <a href="/" class="header-logo">
        <img src="./img/bsale-logo.png" alt="logo de página" id="logoWeb"/>
        BSale
      </a>
      <form class="search-form">                
          <input class="search-input" type="text" name="input" placeholder="Ingrese producto a buscar">
          <button class="search-button" type="submit">Buscar <img src="./img/search-dark.png" alt=""></button>
      </form>
      <a href="#" id="shopping-cart">Ver carrito<img src="./img/carrito-dark.png" alt="icono carrito" onclick="Alert()"/></a>
    </div>  
  </div>  
  `
}

// Clase Header con los métodos toString() para renderizar la estructura del componente Header y 
// setListeners() que establece el listener para el evento de búsqueda de productos por texto.
const Header = {
  toString(){
    return view()
  },
  setListeners(){
    setListenerFilterText()
  }
};

export default Header;
