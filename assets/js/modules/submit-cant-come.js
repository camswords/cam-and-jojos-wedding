var weddingGateway = require('../infrastructure/wedding-gateway');
var validate = require('validate.js');
var _ = require('lodash');

var constraints = function() {
    return {
        who: { presence: { message: '^Please tell us who you are' } }
    };
};

module.exports = function(data) {
    
    data.$module.find('.submit-cant-come').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        var dataToSend = {
            who: data.$module.find("input[name='who']").val(),
            message: data.$module.find("textarea[name='message']").val()
        };
        
        data.$module.find('.error-messages').hide();
        var errors = validate(dataToSend, constraints());

        if (errors) {
            var errorMessages = _.compact([(errors['who'] || []).join(', ')]);

            if (errorMessages.length) {
                var lis = _.map(errorMessages, function(errorMessage) {
                    return '<li>' + errorMessage + '</li>';
                });

                data.$module.find('.error-messages').html('<ul>' + lis.join('') + '</ul>');
                data.$module.find('.error-messages').show();
                return false;
            }    
        }
           
        weddingGateway.post(data.baseUrl + 'cant-come', dataToSend).then(function() {
            data.$module.addClass('thank-you-for-your-rsvp-not-coming');
        });
    });
};
