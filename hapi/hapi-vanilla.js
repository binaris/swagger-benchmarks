'use strict';

const Hapi = require('hapi');
var util = require('util');

const server = new Hapi.Server();
server.connection({ port: 10010, host: 'localhost' });

server.route({
        method: 'GET',
        path: '/hello',
        handler: function (req, reply) {

        var name = req.params.name || 'stranger';
        var hello = util.format('Hello, %s!', name);
        var response = reply(hello);
        response.type("application/json");
    }
});

server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
}
);
