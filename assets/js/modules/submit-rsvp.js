var weddingGateway = require('../infrastructure/wedding-gateway');
var validate = require('validate.js');
var _ = require('lodash');

var constraints = function(dataToSend) {
    var schema = {
        who: { presence: { message: '^Please tell us who you are' } }
    };
    
    if (dataToSend.coming) {
        schema.email = { presence: { message: '^Please provide your email address' } };
    }
    
    return schema;
};

module.exports = function(data) {
    
    data.$module.find(".yes-coming").click(function(event) {
        data.$module.find("#yes-coming-input").click();
    });

    data.$module.find(".no-coming").click(function(event) {
        data.$module.find("#no-coming-input").click();
    });
    
    data.$module.find('.submit-rsvp').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        var dataToSend = {
            who: data.$module.find("input[name='who']").val(),
            coming: data.$module.find("input[name='coming']:checked").val() === "Yes",
            message: data.$module.find("textarea[name='message']").val(),
            email: data.$module.find("input[name='email']").val()
        };
        
        data.$module.find('.error-messages').hide();
        var errors = validate(dataToSend, constraints(dataToSend));

        if (errors) {
            var errorMessages = _.compact([
                (errors['who'] || []).join(', '),
                (errors['email'] || []).join(', ')
            ]);

            if (errorMessages.length) {
                var lis = _.map(errorMessages, function(errorMessage) {
                    return '<li>' + errorMessage + '</li>';
                });

                data.$module.find('.error-messages').html('<ul>' + lis.join('') + '</ul>');
                data.$module.find('.error-messages').show();
                return false;
            }    
        }
           
        weddingGateway.post(data.baseUrl + 'rsvp', dataToSend).then(function() {
            if (dataToSend.coming) {
                data.$module.addClass('thank-you-for-your-rsvp-coming');
            } else {
                data.$module.addClass('thank-you-for-your-rsvp-not-coming');
            }
        });
    });
};
