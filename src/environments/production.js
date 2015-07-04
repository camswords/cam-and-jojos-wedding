
module.exports = {
    environment: function() { return "production"; },
    port: function() { return Number(process.env.PORT); },
    url: function() { return 'http://www.camandjojoswedding.com/'; },
    mongodb: {
        url: function() { return process.env.MONGODB_URL; }
    },
    minifyJavascript: function() { return true; }
};
