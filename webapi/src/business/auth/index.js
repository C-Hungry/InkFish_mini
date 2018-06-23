import account from './account';
import system from './system';
import order from './order';

var routes = [];

var load = (router) => {
  router.routes.forEach((route) => {
    route.path = "/auth" + router.path + route.path;
  });
  routes = routes.concat(router.routes);
}

load(account);
load(system);
load(order);


export default routes;