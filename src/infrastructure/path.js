var config = require('../config');

module.exports = {
    toStylesheet: function() {
        return config.url() + 'css/styles.css';
    }
};
