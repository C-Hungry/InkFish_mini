import express from 'express';
import routes from '../business';
import bodyParser from 'body-parser';
import CryptoJS from 'crypto-js';
import config from '../config/config';
import database from './database';
import session from './session';
import https from 'https';

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "authorization,content-type");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use("/api", function (req, res, next) {
  res.error = function (msg) {
    this.status(500).send({ status: "error", msg });
  };
  res.success = function (result) {
    this.send({ status: "success", result });
  }
  next();
});

app.use("/api/auth", function (req, res, next) {

  if (req.method == "OPTIONS") {
    next();
    return;
  }
  if (!session.get(req.headers['authorization'])) {
    res.error("用户未登录");
    return;
  }

  req.openid = session.get(req.headers['authorization']).openid;
  next();
});

app.get("/api/authorization", function (req, res) {

  https.get("https://api.weixin.qq.com/sns/jscode2session?appid=wxf19b7021ef8cb937&secret=8ff7695a9590a83777477f5c47242135&grant_type=authorization_code&js_code=" + req.query.code, function(res1){

    res1.setEncoding('utf8');
    res1.on('data',function(data){
      var data = JSON.parse(data);
      session.add(req.query.code, { openid: data.openid });
      res.success(req.query.code);
    });
  });
});


routes.forEach(function (item) {

  switch (item.method) {
    case "get":
      app.get("/api" + item.path, item.action);
      break;
    case "post":
      app.post("/api" + item.path, item.action);
      break;
    default:
      break;
  }
});

export default app;