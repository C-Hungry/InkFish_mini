import app from './framework';

var fs = require('fs');

var https = require('https');

var privateKey = fs.readFileSync('src/sslcert/3_mnxm.xyz.key', 'utf8');

var certificate = fs.readFileSync('src/sslcert/2_mnxm.xyz.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(8888);

// var server = app.listen(10111, function () {

//   var host = server.address().address;

//   var port = server.address().port;

//   console.log("应用实例，访问地址为 http://%s:%s", host, port);

// });