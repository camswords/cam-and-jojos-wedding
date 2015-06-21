var Promise = require('bluebird');

module.exports = function(Rsvp) {
    return function(model) {
        var model = Promise.promisifyAll(new Rsvp(model));
        return model.saveAsync();
    };
};
