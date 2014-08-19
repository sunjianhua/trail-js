'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var filesize = require('gulp-filesize');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var clean = require('gulp-rimraf');

// clean dist
gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('build', function() {
    return gulp.src('src/*.js')
        // concatenate and generate trail.js
        .pipe(concat('trail.js'))
        .pipe(gulp.dest('dist'))
        .pipe(filesize())

        // create min.js
        .pipe(uglify())
        .pipe(rename('trail.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(filesize())

        // error logging
        .on('error', gutil.log)
});