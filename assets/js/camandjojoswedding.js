
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
        anchors: ['welcome-section', 'rsvp-section', 'cant-come-section', 'agenda-section', 'kids-section', 'gifts-section', 'accommodation-section', 'aboutus-section'],
        menu: '#menu'
    });

    $('.menu-toggle').on('click', function(event) {
        event.preventDefault();
        
        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        slideoutMenu.toggleClass("open");

        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({ left: "0px" });
            $('.menu-toggle').animate({ left: "250px" });
        } else {
            slideoutMenu.animate({ left: -slideoutMenuWidth }, 250);
            $('.menu-toggle').animate({ left: "0px" }, 250);
        }
    });    
});