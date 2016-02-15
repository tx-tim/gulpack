var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var webpackStream = require('webpack-stream');

var browserSync = require('browser-sync').create();

gulp.task('wpbundle', function() {
	return gulp.src('./src/foo.js')
		.pipe(webpackStream( require("./webpack.config.js")) )
		.pipe(gulp.dest("./dist"))
		.pipe(browserSync.stream());
});

gulp.task('default', ['wpbundle'], function() {
	browserSync.init({
		server: "./dist"
	})

	gulp.watch("./src/**/*.js", ['wpbundle']);
});