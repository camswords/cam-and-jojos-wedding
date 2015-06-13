var gulp = require('gulp');
var gulps = require('require-dir')('./tasks');

gulp.task('styles', gulps['styles']({ continueOnError: false }));
gulp.task('relaxed-styles', gulps['styles']({ continueOnError: true }));

gulp.task('serve', ['relaxed-styles'], gulps['serve']);