import './components/Product/Product'

class initContainer extends HTMLElement {

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
        <product-container></product-container>
      `;
    }
  }
}

customElements.define('init-container', initContainer);