var mongoose = require('../infrastructure/mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var RsvpSchema = new Schema({
    who: { type: String },
    coming: { type: Boolean },
    email: { type: String },
    message: { type: String }
}).plugin(timestamps);

var Rsvp = mongoose.model('Rsvp', RsvpSchema);

module.exports = {
    saveReply: require('./rsvp/save-reply')(Rsvp)
};
