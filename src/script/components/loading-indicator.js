class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .loading {
            text-align: center;
            font-weight: bold;
            padding: 1rem;
            color: #4c6ef5;
          }
        </style>
        <div class="loading">Loading...</div>
      `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
