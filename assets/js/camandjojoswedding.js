
var $ = require('jquery');
var fullPage = require('fullpage.js');
var modules = require('./modules/modules');

$(document).ready(function() {
    modules.execute($('.dynamic-module'));
    
    $('#fullpage').fullpage({
        anchors: ['first-page', 'second-page'],
        menu: '#menu'
    });

    
});