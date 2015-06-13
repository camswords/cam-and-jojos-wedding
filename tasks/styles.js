var gulp = require('gulp');
var stylus = require('gulp-stylus');
var gulpif = require('gulp-cond');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var nib = require('nib');
var extend = require('extend');

module.exports = function(overrides) {
    return function() {
        var options = extend({}, { continueOnError: false }, overrides);

        gulp.src(['assets/css/styles.styl'])
            .pipe(gulpif(options.continueOnError, plumber({
                handleError: function(error) {
                    console.log('error:', error);
                    this.emit('end');
                }
            })))
            .pipe(stylus({
                compress: true,
                "include css": true,
                include: 'vendor/css',
                use: [nib()]
            }))
            .pipe(concat('styles.css'))
            .pipe(gulp.dest('public/css'));

    };
};
