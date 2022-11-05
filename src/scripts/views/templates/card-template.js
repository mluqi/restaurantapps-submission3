import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
    <style>
    .content-item {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    }

    .content-item-isi {
    padding: 16px;
    }

    .content-item-img {
    align-item: center;
    width: 100%;
    background-position: center;
    background-size: cover;
    }

    .content-item-title{
    margin-top: 5px;

    }

    .content-item-title a{
        color: #C21010;
        text-decoration: none;
        padding: 7px 7px 7px 7px;
    }

    .content-item-desc{
    font-size: 12px;
    }

    .city{
    margin-top: 5px;
    }

    .content-rating {
    text-align: left;
    padding-left: 6px;
    padding-top:4px;
    padding-bottom:4px;
    background-color: #251B37;
    color: #FFECEF;
    border-radius: 20px;
    max-width: 50px;
    font-size: 12px;
    }
    </style>

    <div class="content" tabindex="0">
    <article class="content-item">
    <picture>
    <source media="(min-width: 800px)" data-srcset="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
    <img class="content-item-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"
    data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
    sizes="(min-width: 800px) 480px, 800px">

    </picture>
    <div class="content-item-isi">
        <h2 class="content-item-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
        <p class="content-item-desc">${restaurant.description}</p>
        <h5 class="city">📍 ${restaurant.city}</h5>
        <p class="content-rating">⭐ ${restaurant.rating}</p>
    </div>
    </article>
    </div>
    `;

export default createRestaurantItemTemplate;
