import { createLikeRestaurantButtonTemplate, createLikedRestaurantButtonTemplate } from '../views/templates/like-liked-template';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;
    this.favoriteRestaurants = favoriteRestaurants;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await this.favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteRestaurants.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteRestaurants.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeButtonPresenter;
