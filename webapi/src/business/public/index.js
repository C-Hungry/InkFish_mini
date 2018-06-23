import account from './account';

var routes = [];

var load = (router) => {
  router.routes.forEach((route) => {
    route.path = "/public" + router.path + route.path;
  });
  routes = routes.concat(router.routes);
}

load(account);


export default routes;