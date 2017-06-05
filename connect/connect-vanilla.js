'use strict';

var connect = require('connect');
var query = require('qs-middleware');
var http = require('http');
var util = require('util');
var app = connect();
app.use(query());

app.use('/hello', function hello(req, res, next) {
  var name = req.query.name || 'stranger';
  var hello = util.format('Hello, %s!', name);
  res.writeHead(200, {'ContentType': 'application/json'});


  // this sends back a JSON response which is a single string
  res.end(hello);
  next();
});

http.createServer(app).listen(10010);
console.log("Listening on 10010");
