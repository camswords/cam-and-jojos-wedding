
var $ = require('jquery');
var fullPage = require('fullpage.js');
var modules = require('./modules/modules');

// the follow are only to assist debugging in a browser window
window.$ = $;

// the following is for semantic-ui
window.jQuery = $;

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
});
