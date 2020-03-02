'use strict';

//Code Gulp 4
const { src, dest, watch } = require('gulp'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  browserSync = require('browser-sync').create();

function miniCSS () {
  return src('src/css/style.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('src/css'))
}

function BrowserSync () {
  browserSync.init({
    server: {
        baseDir: "src"
    }
  });
  watch("src/*.html").on('change', browserSync.reload);
}

exports.miniCSS = miniCSS;
exports.BrowserSync = BrowserSync;



//Code Gulp 3

//const gulp = require('gulp'),
//  cssnano = require('gulp-cssnano'),
 // rename = require('gulp-rename'),
//  browserSync = require('browser-sync').create();


// Static server
//gulp.task('browser-sync', () => {
 // browserSync.init({
//    server: {
//      baseDir: 'src'
//    }
//  });
//  gulp.watch("src/*.html").on('change', browserSync.reload);
//});

// Minifier CSS module + rename CSS
//gulp.task('Mini-CSS', () => {
//  return gulp.src('src/css/style.css')
 //   .pipe(cssnano())
 //   .pipe(rename({suffix: '.min'}))
//    .pipe(gulp.dest('src/css'))
//});