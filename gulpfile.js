var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('stylesheets/**/*.scss',['styles']);
});