import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
