/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
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
  I.dontSeeElement('.content-item');
  I.dontSeeElement('.content-item title a');
});
