import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/footer';
import './component/hero';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  hamburgerbuttonElement: document.querySelector('#hamburger'),
  drawerElement: document.querySelector('#drawer'),
  mainElement: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
