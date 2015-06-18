var weddingGateway = require('../infrastructure/wedding-gateway');

module.exports = function(data) {
    data.$module.find('.submit-rsvp').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        var data = {
            who: data.$module.find("input[name='who']").val(),
            coming: data.$module.find("input[name='coming']").val(),
            message: data.$module.find("input[name='message']").text(),
            email: data.$module.find("input[name='who']").val()
        };
        
        weddingGateway.post(data.baseUrl + '/rsvp', data).then(function() {
            data.$module.addClass('thank-you-for-your-rsvp');
        });
    });
};
