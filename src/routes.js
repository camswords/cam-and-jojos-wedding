

module.exports = function(router) {
    
    router.get('/', require('./controllers/home'));
    
    return router;
};