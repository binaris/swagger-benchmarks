'use strict';

const util = require('util')

var restify = require('restify');

function respond(req, res, next) {
  var name = req.params.name || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);

server.listen(10010, function() {
      console.log('%s listening at %s', server.name, server.url);
});
