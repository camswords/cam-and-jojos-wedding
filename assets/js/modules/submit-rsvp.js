
module.exports = function(data) {
    data.$module.find('.submit-rsvp').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
    });
};
