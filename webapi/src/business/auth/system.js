import database from '../../framework/database';

var path = "/system";
var routes = [
  {
    path: "/account-list",
    method: "get",
    action: (req, res) => {
      database('account').then(query => {
        Promise.all([
          query.find().count(),
          query.find().skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit)).toArray()
        ])
          .then((result) => {
            res.success({
              count: result[0], 
              items: result[1].map(x => { return { _id: x._id, account: x.account }; }) 
            });
          });
      });
    }
  },
];

export default {
  path, routes
};