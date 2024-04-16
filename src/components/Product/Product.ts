import styles from './Product.css';

export enum Attribute {
	'image' = 'image',
	'name' = 'name',
	'description' = 'description',
	'category' = 'category',
	'rating' = 'rating',
	'price' = 'price',
}

class Product extends HTMLElement {

  image?: string;
  name?: string;
  description?: string;
  category?: string;
  rating?: string;
  price?: string;

  static get observedAttributes() {
		const classAttribute: Record<Attribute, null> = {
			image: null,
			name: null,
			description: null,
			category: null,
			rating: null,
			price: null,
		};
		return Object.keys(classAttribute);
	}

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
          <img class="img-product" src="${this.image}">
          <h1>${this.name}</h1>
          <p>${this.description}</p>
          <small>${this.category}</small> - <small>${this.rating}</small>
          <p>${this.price}</p>
          <button onclick="alert('¡Añadido!')">Añadir al carrito</button>
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
