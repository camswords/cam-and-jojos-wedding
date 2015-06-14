var mongoose = require('../infrastructure/mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var RsvpSchema = new Schema({
    who: { type:String },
    coming: { type: Boolean },
    notes: { type: String }
}).plugin(timestamps);

module.exports = mongoose.model('Rsvp', RsvpSchema);
