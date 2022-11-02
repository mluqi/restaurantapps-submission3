const DrawerInitiator = {
  init({ hamburgerButtonElement, drawerElement }) {
    hamburgerButtonElement.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawerElement);
    });

    // eslint-disable-next-line no-restricted-globals
    addEventListener('click', (event) => {
      this.closeDrawer(event, drawerElement);
    });
  },

  toggleDrawer(event, drawerElement) {
    event.stopPropagation();
    drawerElement.classList.toggle('open');
  },

  closeDrawer(event, drawerElement) {
    event.stopPropagation();
    drawerElement.classList.remove('open');
  },
};

export default DrawerInitiator;
