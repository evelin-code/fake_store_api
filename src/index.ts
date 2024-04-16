import './screens/dashboard';

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
        <dashboard-container></dashboard-container>
      `;
    }
  }
}

customElements.define('init-container', initContainer);