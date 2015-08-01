var gulp = require('gulp');
var gulpif = require('gulp-cond');
var streamqueue = require('streamqueue');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var extend = require('extend');
var config = require('../src/config');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function() {
    return function() {

        return browserify(['./vendor/semanticui/dist/semantic.min.js', './assets/js/camandjojoswedding.js'])
               .bundle()
               .pipe(source('bundles.js'))
               .pipe(buffer())
               .pipe(uglify())
               .pipe(gulp.dest('public/'));

//            .pipe(gulpif(config.minifyJavascript(), uglify()))
//            .pipe(concat('minified-scripts.js'));

//        return streamqueue({ objectMode: true }, application, vendor)
//            .pipe(concat('scripts.js'))
    };
};
