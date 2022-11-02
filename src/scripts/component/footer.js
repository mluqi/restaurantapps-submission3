class footerElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .footer {
        background-color: #251B37;
        color: #FFECEF;
        font-size: 10px;
        text-align: center;
        padding: 10px;
        margin-top: 50px;
      }

      @media screen and (min-width: 650px) {
        .footer{
          font-size: 12px;
        }
      }

      @media screen and (min-width: 780px) {
        .footer{
          font-size: 15px;
        }
      }

      @media screen and (min-width: 1000px) {
        .footer{
          font-size: 17px;
        }
      }


    </style>
    <div class="footer">
    <p>Created With ❤️ by Mohammad Luqi 2022 - MakanYuk!</p>
    </div>
        `;
  }
}

customElements.define('footer-element', footerElement);
