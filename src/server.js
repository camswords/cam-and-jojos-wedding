var express = require('express');
var config = require('./config');
var path = require('path');
var database = require('./infrastructure/database');

database.connected().then(function() {

    var webServer = express();

    webServer.use(express.static(path.join(process.cwd(), 'public')));

    webServer.set('views', __dirname + '/views');
    webServer.set('view engine', 'jade');

    webServer.use(require('./controllers/request-helpers'));

    webServer.use(function(request, response) {
        response.render('index');
    });

    webServer.listen(config.port(), function() {
        console.log('started cam-and-jojos-wedding on port ' + config.port() + '. Using configuration for ' + config.environment() + '.');
    });

}).catch(function(error) {
    console.log('failed to start server due to', error);
}).done();
