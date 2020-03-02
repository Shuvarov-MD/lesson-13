'use strict';

const gulp = require('gulp'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync').create();


// Static server
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Minifier CSS module + rename CSS
gulp.task('Mini-CSS', () => {
  return gulp.src('src/css/style.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
});