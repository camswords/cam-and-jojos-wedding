var Promise = require('bluebird');

module.exports = function(Rsvp) {
    return function(model) {
        var model = Promise.promisifyAll(new Rsvp(model));
        console.log(model.saveAsync);
        return model.saveAsync();
    };
};
