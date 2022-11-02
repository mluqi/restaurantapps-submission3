/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail-container">
    <img class="detail-img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="detail-info">
            <h2 class="detail-name">${restaurant.name}</h2>
                <h4>Address</h4>
                <p>📍 ${restaurant.address}, ${restaurant.city} </p>
                <h4>Rating</h4>
                <p>⭐ ${restaurant.rating}</p>
                <div class="detail-desc">
                    <h3>Description</h3>
                    <p>${restaurant.description}</p>
                </div>
            </div>
        </div>
        <h3 class="menu-label">Menu</h3>
          <div class="menu">
            <div class="makanan">
                <h4>Foods</h4>
                <ul>
                ${restaurant.menus.foods
                  .map(
                    (food, i) => `
                      <li><p>${i + 1}) ${food.name}</p></li>
                    `,
                  )
                  .join('')}
              <ul>
            </div>
            <div class="minuman">
                <h4>Drinks</h4>
                <ul>
                ${restaurant.menus.drinks
                  .map(
                    (drink, i) => `
                      <li><p>${i + 1}) ${drink.name}</p></li>
                    `,
                  )
                  .join('')}
              <ul>
            </div>
          </div>

        <h3 class="menu-label">Reviews</h3>

        <div class="review">
        ${restaurant.customerReviews
          .map(
            (review) => `
              <div class="detail-review-item">
                <div class="review-header">
                  <p class="review-name">${review.name}</p>
                  <p class="review-body">${review.review}</p>
                  <p class="review-date">${review.date}</p>
                </div>
              </div>
            `,
          )
          .join('')}
        </div>
    </div>

`;

export default createRestaurantDetailTemplate;
