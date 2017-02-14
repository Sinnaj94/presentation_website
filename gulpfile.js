var gulp = require('gulp');
var sass = require('gulp-sass');
var sftp = require('gulp-sftp');
gulp.task('styles', function() {
    gulp.src('./src/stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('stylesheets/**/*.scss',['styles']);
});

gulp.task('deploy', function() {
	return gulp.src('./src/**')
	        .pipe(sftp({
	            host: 'home669624775.1and1-data.host',
	            user: 'u88314581',
	            remotePath: './htdocs'
	        }));
})