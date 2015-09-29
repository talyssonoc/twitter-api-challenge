var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');

var jsGlob = 'src/js/**/*.js';

gulp.task('build:js', function () {
  browserify({
  entries: 'src/js/app.js',
  debug: true
  })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('lint:js', function () {
  return gulp.src(jsGlob)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('watch:js', ['build:js'], function() {
  gulp.watch(jsGlob, ['build:js']);
});
