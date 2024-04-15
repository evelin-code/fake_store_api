import styles from './Product.css';

class Product extends HTMLElement {

 constructor() {
    super();
    this.attachShadow({ mode: 'open' });
 }
 
 connectedCallback() {
    this.render();
 }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="container-product">
          <img class="img-product" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlPuD-kHu75Tl04N5i_UC3VIOZWeWZvqEHgtnf8Dbqw&s">
          <h1>titulo</h1>
          <p>descripcion</p>
          <small>categoria</small> - <small>Rating</small>
          <p>precio</p>
          <button onclick="alert('¡Bienvenido a GeeksforGeeks!')">Haz clic aquí</button>
        </div>
      `;

      const cssMyComponent = this.ownerDocument.createElement('style');
      cssMyComponent.textContent = styles;
      this.shadowRoot.appendChild(cssMyComponent);
    }
  }
}
 
customElements.define('product-container', Product);
export default Product;
