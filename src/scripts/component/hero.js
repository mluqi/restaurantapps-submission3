class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
          <div class="heroInner">
            <h1 class="heroTitle">Visit Order Repeat</h1>
            <p class="heroTagline">"I get way to much happiness from good food."</p>
          </div>
        </div>
        `;
  }
}

customElements.define('hero-content', HeroContent);
