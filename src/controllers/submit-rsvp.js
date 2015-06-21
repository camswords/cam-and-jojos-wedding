var Rsvp = require('../models/rsvp');

module.exports = function(request, response) {

    var data = {
        who: request.body.who,
        coming: request.body.coming,
        message: request.body.message,
        email: request.body.email
    };

    Rsvp.saveReply(data).then(function() {
        return response.status(200).end();
    }).catch(function(error) {
        console.log('error saving reply, data is', request.body, 'error is', error.stack);
        return response.status(500).send('Server error');
    }).done();
};
