const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const stylus = require('gulp-stylus');
const imagemin = require('gulp-imagemin');

const reload = browserSync.reload;

/**
 * Gulp Tasks
 */

gulp.task('image', function() {
	gulp.src('public/images/*')
    .pipe(imagemin([
	imagemin.jpegtran({progressive: true, optimizationLevel: 2})],
      {verbose: true}))
    .pipe(gulp.dest('public/compressed-images/'));
});

gulp.task('stylus', function() {
	gulp.src('public/stylesheets/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(reload({stream: true}));
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init({
		proxy: 'localhost:3000',  // Local node app address
		port: 1337
    // Https: true  // Will be used in case secure origin is ever required
	});
});

gulp.task('nodemon', cb => {
	let called = false;
	return nodemon({
		script: 'bin/www',
		ignore: [
			'gulpfile.js',
			'node_modules/'
		]
	})
  .on('start', function() {
	if (!called) {
		called = true;
		cb();
	}
})
  .on('restart', function() {
	setTimeout(function() {
		reload({stream: false});
	}, 1000);
});
});

gulp.task('watch', function() {
	gulp.watch('./src/stylesheets/*.styl', ['stylus']);
});

gulp.task('default', ['image', 'browser-sync', 'stylus', 'nodemon', 'watch']);
