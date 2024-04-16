import styles from './ShoppingCartItem.css';

class ShoppingCartItem extends HTMLElement {

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
          <div class="content-left">
            <img class="img-product" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlPuD-kHu75Tl04N5i_UC3VIOZWeWZvqEHgtnf8Dbqw&s">
          </div>
          <div class="content-right">
            <h1>titulo</h1>
            <p>precio</p>
          </div>
        </div>
      `;

      const cssMyComponent = this.ownerDocument.createElement('style');
      cssMyComponent.textContent = styles;
      this.shadowRoot.appendChild(cssMyComponent);
    }
  }
}
 
customElements.define('shopping-car-container', ShoppingCartItem);
export default ShoppingCartItem;
