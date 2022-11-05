import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import createRestaurantDetailTemplate from '../templates/detail-template';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <style>
      .nav{
        z-index: 2;
      }
      #container{
        display: grid;
        grid-template-areas: 'myArea';
        grid-gap: 30px;
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
      }
      .post {
          width: 100%;
          margin: 60px auto;
          text-align: center;
        }

      .post-label {
        text-align: center;
        font-weight: lighter;
        font-size: 30px
      }
      .hero{
        min-height: 1px;
        margin-bottom: 100px;
      }
      .heroInner{
        display: none;
      }
      </style>
    <div class="post">
      <h2 class="post-label">Details</h2>
    </div>
    <section id="container">
    </section>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await DataSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#container');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        city: data.restaurant.city,
        rating: data.restaurant.rating,
        description: data.restaurant.description,
        pictureId: data.restaurant.pictureId,
      },
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
