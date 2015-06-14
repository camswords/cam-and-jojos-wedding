
var $ = require('jquery');
var fullPage = require('fullpage.js');

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['first-page', 'second-page'],
        menu: '#menu'
    });
});