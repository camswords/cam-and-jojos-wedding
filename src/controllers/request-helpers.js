
module.exports = function(request, response, next) {
    
    response.locals.path = require('../infrastructure/path');

    next();
};
