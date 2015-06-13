var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function() {

    gulp.watch('assets/css/**/*.styl', ['relaxed-styles']);

    nodemon({
        script: './src/server.js',
        watch: ['src'],
        ext: 'js'
    });
};
