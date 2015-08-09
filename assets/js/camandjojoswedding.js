
var $ = require('jquery');
var page = require('page');
var modules = require('./modules/modules');

// the follow are only to assist debugging in a browser window
window.$ = $;

// the following is for semantic-ui
window.jQuery = $;

var scrollTo = function($element) {
    return function() {
        $('html, body').animate({ scrollTop: $element.offset().top }, 1000);
    };
};

$(document).ready(function() {
    modules.execute($('.dynamic-module'));
    
    $('.menu-toggle').on('click', function(event) {
        event.preventDefault();
        
        var menuToggle = $('.menu-toggle');
        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        slideoutMenu.toggleClass("open");
        menuToggle.toggleClass("open");

        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({ left: "0px" });
            menuToggle.animate({ left: "250px" });
        } else {
            slideoutMenu.animate({ left: -slideoutMenuWidth }, 250);
            menuToggle.animate({ left: "0px" }, 250);
        }
    });
    
    $('.slideout-menu li a').click(function() {
        $('.menu-toggle').click();
    });

    page.base('/section');
    page('/welcome', scrollTo($('#section-welcome')));
    page('/about-us', scrollTo($('#section-aboutus')));
    page('/agenda', scrollTo($('#section-agenda')));
    page('/getting-there', scrollTo($('#section-getting-there')));
    page('/accommodation', scrollTo($('#section-accommodation')));
    page('/kids', scrollTo($('#section-kids')));
    page('/gifts', scrollTo($('#section-gifts')));
    page('/cant-come', scrollTo($('#section-cant-come')));
    page({ hashbang: true });
});
