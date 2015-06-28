var CantCome = require('../models/cant-come');

module.exports = function(request, response) {

    var data = {
        who: request.body.who,
        message: request.body.message
    };

    CantCome.saveReply(data).then(function() {
        return response.status(200).end();
    }).catch(function(error) {
        console.log('error saving reply, data is', request.body, 'error is', error.stack);
        return response.status(500).send('Server error');
    }).done();
};
