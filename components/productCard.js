// Método que genera la estructura del card con la información de un producto.
const productCard = (product) => {
  const view = `
    <div class="card-product">
      <div class="img-card">
        <img src="${product.url_image != "" ? product.url_image != null ? product.url_image : '../img/producto-sin-foto.jpg' :'../img/producto-sin-foto.jpg' }" alt="">
      </div>
      <div class="product-name">
        <p> ${product.name} </p>
      </div>
      <div class="price-container">
        <div class="product-price">
          <p>S/. ${product.price} </p>
        </div> 
        ${product.discount <= 0 ? "" : `
        <div class="product-discount">
          <p> Dscto. ${product.discount} %</p>
        </div>`
      }
      </div>
      <button class="button-add-cart">Agregar al carrito</button>
    </div>
  `;
  return view;
} 

export default productCard;