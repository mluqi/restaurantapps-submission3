/* eslint-disable class-methods-use-this */
import createRestaurantItemTemplate from '../../templates/card-template';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
          <div class="content">
            <div class="query-wrapper">
              <input id="query" type="text" placeholder="Search for Favorite Restaurant 🔍">
            </div>
            <h2 class="post-label">Your Favorite Restaurant</h2>
            <br>
          </div>
      <section id="container" class="container">
      </section>

    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this.getEmptyRestaurantTemplate();
    }
    document.getElementById('container').innerHTML = html;

    document.getElementById('container').dispatchEvent(new Event('container:updated'));
  }

  getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item_not_found restaurants_not_found">Tidak ada Restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
