'use strict';

var gulp    = require('gulp');

/**
* Gulp task to run the web server and live reload the changes in browser
*
* @usage
*   $ gulp webserver --gulpfile gulpfile.js
*/

var server  = require('gulp-server-livereload');

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(server({
            livereload:       true,
            directoryListing: true,
            open:             true,
            log:              'debug',
            clientConsole:    true,
            port:             8080
        }));
});

gulp.task('default', ['webserver']);

/**
* Gulp task to run sass
*
* @usage
*   $ gulp sass --gulpfile gulpfile.js
*/

var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

//gulp.task('sass:watch', function () {
  //gulp.watch('./assets/sass/**/*.scss', ['sass']);
//});
