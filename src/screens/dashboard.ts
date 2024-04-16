import styles from './dashboard.css';
import '../components/Product/Product';
import { getProducts } from '../services/getProduts';

class Dashboard extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
 
  connectedCallback() {
    this.render();
    this.loadProducts();
  }

  async loadProducts() {
    try {
      const products = await getProducts();
      this.renderProducts(products);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }

  renderProducts(products: any[]) {
    const productContainer = this.shadowRoot?.querySelector('.container-dashboard');
    if (productContainer) {
      products.forEach(product => {
        const productElement = document.createElement('product-container') as any;
        productElement.image = product.image;
        productElement.name = product.title;
        productElement.description = product.description;
        productElement.category = product.category;
        productElement.rating = product.rating.rate.toString();
        productElement.price = product.price;
        productContainer.appendChild(productElement);
      });
    }
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="navbar">
          <ul>
            <li><button id="homeButton">Home</button></li>
            <li><button id="cartButton">Carrito de Compras</button></li>
          </ul>
        </div>
        <div class="container-dashboard"></div>
      `;

      const cssMyComponent = this.ownerDocument.createElement('style');
      cssMyComponent.textContent = styles;
      this.shadowRoot.appendChild(cssMyComponent);
    }
  }
}
 
customElements.define('dashboard-container', Dashboard);
export default Dashboard;
