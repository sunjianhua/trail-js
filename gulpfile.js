'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var filesize = require('gulp-filesize');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var clean = require('gulp-rimraf');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

// clean dist folder
gulp.task('clean-dist', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

// main build script
gulp.task('build-js', function() {
    return gulp.src('src/*.js')
        // concatenate and generate trail.js
        .pipe(concat('trail.js'))
        .pipe(gulp.dest('dist'))
        .pipe(filesize())

        // create min.js
        .pipe(uglify())
        .pipe(rename('trail.min.js'))
        .pipe(gulp.dest('dist'))

        // create version in examples
        .pipe(gulp.dest('./examples/js'))
        .pipe(filesize())

        // error logging
        .on('error', gutil.log)
});

// launch the examples server
gulp.task('server-examples', function() {
    connect.server({
        port: 8080,
        root: './examples'
    });
});

// file watcher for auto-build and examples reload
gulp.task('watch', function () {
    gulp.watch('./src/*.*', ['reload']);
});


// default gulp task
gulp.task('default', ['server-examples']);
gulp.task('dev', ['clean-dist', 'build-js', 'watch']);
gulp.task('build', ['clean-dist', 'build-js']);