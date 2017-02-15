var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sftp = require('gulp-sftp'),
	watch = require('gulp-watch');

var source = './src',
	dist = './dist';

gulp.task('styles', function() {
    gulp.src('./src/stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('stylesheets/**/*.scss',['styles']);
});

//copy task
gulp.task('watch-folder', function() {
	gulp.src(source + '/**/*', {base: source})
	   .pipe(watch(source, {base: source}))
	   .pipe(gulp.dest(dist));
})

gulp.task('deploy', function() {
	return gulp.src('./src/**')
	        .pipe(sftp({
	            host: 'home669624775.1and1-data.host',
	            remotePath: './htdocs',
				auth: 'keyShort'
	}));
})