var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function() {

    gulp.watch('assets/css/**/*.styl', ['relaxed-styles']);
    gulp.watch('assets/js/**/*.js', ['relaxed-scripts']);

    nodemon({
        script: './src/server.js',
        watch: ['src'],
        ext: 'js'
    });
};
