var mongoose = require('../infrastructure/mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var CantComeSchema = new Schema({
    who: { type: String },
    message: { type: String }
}).plugin(timestamps);

var CantCome = mongoose.model('CantCome', CantComeSchema);

module.exports = {
    saveReply: require('./cant-come/save-reply')(CantCome)
};
