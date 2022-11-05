import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import createRestaurantItemTemplate from '../templates/card-template';

const Favorite = {
  async render() {
    return `
    <div class="post">
      <h2 class="post-label">Favorite</h2>
    </div>
    <section id="container">
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#container');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
