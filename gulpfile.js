var gulp = require('gulp');
var gulps = require('require-dir')('./tasks');

gulp.task('styles', gulps['styles']({ continueOnError: false }));
