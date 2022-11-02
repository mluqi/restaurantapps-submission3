class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this.view = view;
    this.favoriteRestaurants = favoriteRestaurants;

    this.showFavoriteRestaurants();
  }

  async showFavoriteRestaurants() {
    const restaurants = await this.favoriteRestaurants.getAllRestaurants();
    this.displayRestaurants(restaurants);
  }

  displayRestaurants(restaurants) {
    this.view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;
