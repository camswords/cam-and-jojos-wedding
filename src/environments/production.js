
module.exports = {
    environment: function() { return "production"; },
    port: function() { return Number(process.env.PORT); },
    url: function() { return 'http://camnjojoswedding.herokuapp.com/'; }
};
