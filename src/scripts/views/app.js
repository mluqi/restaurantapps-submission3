import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ hamburgerbuttonElement, drawerElement, mainElement }) {
    this.button = hamburgerbuttonElement;
    this.drawer = drawerElement;
    this.main = mainElement;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      hamburgerButtonElement: this.button,
      drawerElement: this.drawer,
      mainElement: this.main,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.main.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
