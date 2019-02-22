'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');


// task para o sass
gulp.task('sass', function() {
    return gulp.src('sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.sass',  gulp.series('sass'));
});



