import auth from './auth';
import pub from './public';

var routes = [];

routes = routes.concat(auth, pub);

export default routes;