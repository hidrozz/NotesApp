class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer-bar">
        <p>FC008D5Y1507 Hidayat Nur Ali Razzaq</p>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
