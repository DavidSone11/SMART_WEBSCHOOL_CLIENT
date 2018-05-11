' use strict';

var gulp = require("gulp");
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');





gulp.task('min-css', function () {
    gulp.src('public/stylesheets/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/stylesheets/'))

});

gulp.task('min-sass', function () {
    gulp.task('sass', function () {
        return sass('public/stylesheets/sass/**/*.scss', { style: 'expanded' })
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest('public/stylesheets/'))
    });
});


gulp.task('min-js', function () {

});

gulp.task('min-imgs', function () {

});

gulp.task('watch', function () {
    gulp.watch('public/stylesheets/css/**/*.css', ['min-css']);
});





gulp.task('build', ['min-css', 'min-js', 'min-imgs']);