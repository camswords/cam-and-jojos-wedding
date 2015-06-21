var weddingGateway = require('../infrastructure/wedding-gateway');
var validate = require('validate.js');

var showError = function(error, $selector) {
    var errorMessage = (error || []).join(', ');

    if (errorMessage) {
        $selector.show();
        $selector.html(errorMessage);
    } else {
        $selector.hide();
    }
};

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
    data.$module.find('.submit-rsvp').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        var dataToSend = {
            who: data.$module.find("input[name='who']").val(),
            coming: data.$module.find("input[name='coming']:checked").val() === "Yes",
            message: data.$module.find("input[name='message']").text(),
            email: data.$module.find("input[name='email']").val()
        };
        
        var errors = validate(dataToSend, constraints(dataToSend));

        if (errors) {
            showError(errors['who'], data.$module.find('.who-errors'));
            showError(errors['email'], data.$module.find('.email-errors'));
            
            return false;
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
