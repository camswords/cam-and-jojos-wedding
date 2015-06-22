
module.exports = {
    environment: function() { return "localhost"; },
    port: function() { return 4000; },
    url: function() { return 'http://localhost:4000/'; },
    mongodb: {
        url: function() { return 'mongodb://localhost/camandjojoswedding'; }
    },
    minifyJavascript: function() { return false; }
};
