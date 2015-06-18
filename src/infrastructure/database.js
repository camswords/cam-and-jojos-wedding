var config = require('../config');
var mongoose = require('./mongoose');

module.exports = {
    connected: function() {
        return mongoose.connectAsync(config.mongodb.url()).then(function() {
            return mongoose.connection.db;
        });
    },
    close: function() {
        return mongoose.disconnectAsync();
    }
};
