var gulp = require('gulp');
var gulpif = require('gulp-cond');
var streamqueue = require('streamqueue');
var browserify = require('browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../src/config');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function() {
    return function() {

        var vendor = gulp.src(['./vendor/semanticui/dist/semantic.min.js'])
            .pipe(concat('vendor-scripts.js'));

        var application = browserify({
                entries: ['./assets/js/camandjojoswedding.js'],
                noParse: ['jquery']
            }).bundle()
              .pipe(source('scripts.js'))
              .pipe(buffer())
              .pipe(uglify())
              .pipe(concat('minified-scripts.js'));


        return streamqueue({ objectMode: true }, application, vendor)
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest('public/'));
    };
};
