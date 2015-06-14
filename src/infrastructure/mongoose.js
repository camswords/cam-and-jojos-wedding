
var mongoose = require('mongoose');
var Promise = require('bluebird');

module.exports = Promise.promisifyAll(mongoose);
