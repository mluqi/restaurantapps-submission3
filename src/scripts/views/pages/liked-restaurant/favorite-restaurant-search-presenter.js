class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants, view }) {
    this.view = view;
    this.listenToSearchRequestByUser();
    this.favoriteRestaurants = favoriteRestaurants;
  }

  listenToSearchRequestByUser() {
    this.view.runWhenUserIsSearching((latestQuery) => {
      this.searchRestaurants(latestQuery);
    });
  }

  async searchRestaurants(latestQuery) {
    this.latestQuery = latestQuery.trim();

    let foundRestaurants;
    if (this.latestQuery.length > 0) {
      foundRestaurants = await this.favoriteRestaurants.searchRestaurants(this.latestQuery);
    } else {
      foundRestaurants = await this.favoriteRestaurants.getAllRestaurants();
    }
    this.showFoundRestaurants(foundRestaurants);
  }

  get latestQuery() {
    return this.latestQuery;
  }

  showFoundRestaurants(restaurants) {
    this.view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantSearchPresenter;
