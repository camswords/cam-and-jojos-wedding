var gulp = require('gulp');
var gulpif = require('gulp-cond');
var streamqueue = require('streamqueue');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var extend = require('extend');
var config = require('../src/config');

module.exports = function(overrides) {
    return function() {
        var options = extend({}, { continueOnError: false }, overrides);

        var vendorScripts = ['./vendor/semanticui/dist/semantic.min.js'];

        var vendor = gulp.src(vendorScripts)
            .pipe(concat('vendor-scripts.js'));

        var application = gulp.src(['./assets/js/camandjojoswedding.js'])
            .pipe(gulpif(options.continueOnError, plumber({
                handleError: function(error) {
                    console.log('error:', error);
                    this.emit('end');
                }
            })))
            .pipe(browserify({ noParse: ['jquery'] }))
            .pipe(gulpif(config.minifyJavascript(), uglify()))
            .pipe(concat('minified-scripts.js'));


        return streamqueue({ objectMode: true }, application, vendor)
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest('public/'));
    };
};
