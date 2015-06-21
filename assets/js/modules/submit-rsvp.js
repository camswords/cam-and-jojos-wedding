var weddingGateway = require('../infrastructure/wedding-gateway');

module.exports = function(data) {
    data.$module.find('.submit-rsvp').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        var dataToSend = {
            who: data.$module.find("input[name='who']").val(),
            coming: data.$module.find("input[name='coming']:checked").val() === "Yes",
            message: data.$module.find("input[name='message']").text(),
            email: data.$module.find("input[name='who']").val()
        };
        
        
        weddingGateway.post(data.baseUrl + 'rsvp', dataToSend).then(function() {

            if (dataToSend.coming) {
                data.$module.addClass('thank-you-for-your-rsvp-coming');
            } else {
                data.$module.addClass('thank-you-for-your-rsvp-not-coming');
            }
        });
    });
};
