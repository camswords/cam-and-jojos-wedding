
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
        anchors: ['welcome-section', 'rsvp-section', 'agenda-section', 'kids-section', 'gifts-section', 'accommodation-section', 'aboutus-section'],
        menu: '#menu'
    });

    $('.slideout-menu-toggle').on('click', function(event) {
        event.preventDefault();
        
        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        slideoutMenu.toggleClass("open");

        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({ left: "0px" });
        } else {
            slideoutMenu.animate({ left: -slideoutMenuWidth }, 250);
        }
    });    
});