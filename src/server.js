var express = require('express');

var webServer = express();

var router = express.Router();

webServer.set('views', __dirname + '/views');
webServer.set('view engine', 'jade');

webServer.use(function(request, response) { 
    response.render('index'); 
});

webServer.listen(4000, function() {
    console.log('started cam-and-jojos-wedding on port ' + 4000 + '.');
});
