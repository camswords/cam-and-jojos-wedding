

module.exports = function(router) {
    
    router.get('/', require('./controllers/home'));
    router.post('/rsvp', require('./controllers/submit-rsvp'));
    
    return router;
};