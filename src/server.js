var express = require('express');
var config = require('./config');

var webServer = express();
webServer.set('views', __dirname + '/views');
webServer.set('view engine', 'jade');

webServer.use(function(request, response) { 
    response.render('index'); 
});

webServer.listen(config.port(), function() {
    console.log('started cam-and-jojos-wedding on port ' + config.port() + '. Using configuration for ' + config.environment() + '.');
});
