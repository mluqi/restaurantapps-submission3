import DataSource from '../../data/data-source';
import createRestaurantItemTemplate from '../templates/card-template';

const Home = {
  async render() {
    return `
      <style>
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
      }

      @media screen and (min-width: 450px) {
        #container{
          grid-template-areas: 'myArea';
          grid-gap: 20px;
          margin-left: 50px;
          margin-right: 50px;
        }
      }

      @media screen and (min-width: 650px) {
        #container{
          grid-template-areas: 'myArea myArea';
          grid-gap: 20px;
          margin-left: 20px;
          margin-right: 20px;
        }
      }

      @media screen and (min-width: 780px) {
        #container{
          grid-template-areas: 'myArea myArea';
          grid-gap: 30px;
          margin-left: 60px;
          margin-right: 60px;
        }
      }

      @media screen and (min-width: 1000px) {
        #container{
          grid-template-areas: 'myArea myArea myArea';
          grid-gap: 20px;
          margin-left: 60px;
          margin-right: 60px;
        }
      }
      </style>
      <div class="post">
        <h2 class="post-label">Explore Restaurant</h2>
      </div>
      <section id="container">
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const data = await DataSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#container');

    data.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
