var gulp = require('gulp');
var stylus = require('gulp-stylus');
var gulpif = require('gulp-cond');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var nib = require('nib');
var extend = require('extend');
var streamqueue = require('streamqueue');

module.exports = function(overrides) {
    return function() {
        var options = extend({}, { continueOnError: false }, overrides);

        var vendor = gulp.src(['vendor/fullPage.js-master/jquery.fullPage.css'])
            .pipe(concat('vendor-styles.css'));
        
        var application = gulp.src(['assets/css/styles.styl'])
            .pipe(gulpif(options.continueOnError, plumber({
                handleError: function(error) {
                    console.log('error:', error);
                    this.emit('end');
                }
            })))
            .pipe(stylus({
                compress: true,
                "include css": true,
                use: [nib()]
            }))
            .pipe(concat('styles.css'));

        return streamqueue({ objectMode: true }, vendor, application)
            .pipe(concat('styles.css'))
            .pipe(gulp.dest('public'));
    };
};
