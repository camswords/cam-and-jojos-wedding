
var onFailure = function() {
    console.log('doh! Something went foobar.', error);
};

var post = function(url, data, options) {

    var onSuccess = function(data) { return data; };

    var request = {
        type: 'POST',
        url: url,
        headers: { Accept: 'application/json' }
    };

    if (data) {
        request.contentType = "application/json; charset=utf-8";
        request.data = JSON.stringify(data);
    }

    return $.ajax(request).then(onSuccess).fail(onFailure(url));
};

module.exports = {
    post: post
};
