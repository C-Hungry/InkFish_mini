import database from '../../framework/database';
import session from '../../framework/session';
import https from 'https';

var path = "/account";
var routes = [
  {
    path: "/info",
    method: "get",
    action: (req, res) => {

      // console.log(req.query.code);

      https.get("https://api.weixin.qq.com/sns/jscode2session?appid=wxf19b7021ef8cb937&secret=8ff7695a9590a83777477f5c47242135&grant_type=authorization_code&js_code=" + req.query.code, function(res1){

        res1.setEncoding('utf8');
        res1.on('data',function(data){
          session.add(req.query.code, data.openid);
          res.success(req.query.code);
        });
      });
    }
  },
];

export default {
  path, routes
};