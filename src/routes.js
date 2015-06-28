

module.exports = function(router) {
    
    router.get('/', require('./controllers/home'));
    router.post('/rsvp', require('./controllers/submit-rsvp'));
    router.post('/cant-come', require('./controllers/cant-come'));
    
    return router;
};