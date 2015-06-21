
var $ = require('jquery');
var fullPage = require('fullpage.js');
var modules = require('./modules/modules');

// the follow are only to assist debugging in a browser window
window.$ = $;

$(document).ready(function() {
    modules.execute($('.dynamic-module'));
    
    $('#fullpage').fullpage({
        anchors: ['first-page', 'second-page'],
        menu: '#menu'
    });

    
});