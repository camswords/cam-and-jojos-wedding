
var $ = require('jquery');
var fullPage = require('fullpage.js');
var modules = require('./modules/modules');

// the follow are only to assist debugging in a browser window
window.$ = $;

// the following is for semantic-ui
window.jQuery = $;

$(document).ready(function() {
    modules.execute($('.dynamic-module'));
    
    $('#fullpage').fullpage({
        anchors: ['welcome-section', 'rsvp-section', 'agenda-section', 'kids-section'],
        menu: '#menu'
    });

    
});