/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Show empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item_not_found');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');

  I.seeElement('.content-item-title a');
  I.click(locate('.content-item-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-item-title');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');

  I.seeElement('.content-item-title a');

  const firstRestaurant = locate('.content-item-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-item');
  const likedRestaurantName = await I.grabTextFrom('.content-item-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one favorite restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.content-item-title a');
  I.click(locate('.content-item-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-item-title a');

  I.click(locate('.content-item-title a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item_not_found');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');

  I.seeElement('.content-item-title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.content-item-title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.detail-name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurant = await I.grabNumberOfVisibleElements('.content-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurant);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.content-item-title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
