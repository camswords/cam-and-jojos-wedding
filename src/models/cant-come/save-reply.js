var Promise = require('bluebird');

module.exports = function(CantCome) {
    return function(model) {
        var model = Promise.promisifyAll(new CantCome(model));
        return model.saveAsync();
    };
};
