import database from '../../framework/database';

var path = "/account";
var routes = [
  {
    path: "/info",
    method: "get",
    action: (req, res) => {
      database('account').then(query => {
        query.find({openid: req.openid}).toArray().then(result => {
          res.success(result[0]);
        });
      });
    }
  },
  {
    path: "/save",
    method: "post",
    action: (req, res) => {

      database('account').then(query => {
        query.find({openid: req.openid}).toArray().then(result => {
          if(result.length<=0) {
            database('account').then(query=>{
              query.insert({
                openid: req.openid,
                name: req.body.name,
                phone: req.body.phone,
                carType: req.body.carType
              })
              .then(res1=>{
                res.success("");
              })
            });
            return;
          }
          database('account').then(query=>{
            query.update({
              openid: req.openid,
            },{
              $set:{
                name: req.body.name,
                phone: req.body.phone,
                carType: req.body.carType
              }
            })
            .then(res1=>{
              res.success("");
            })
          });

        });
      });
    }
  },
];

export default {
  path, routes
};