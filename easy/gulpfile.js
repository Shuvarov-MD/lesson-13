'use strict';

// Code Gulp 4
const { watch } = require('gulp'),
  browserSync = require('browser-sync').create();

function BrowserSync() {
  browserSync.init({
    server: {
        baseDir: "src"
    }
  });
  watch("src/*.html").on('change', browserSync.reload);
}

exports.BrowserSync = BrowserSync;



// Code Gulp 3

//const gulp = require('gulp');
//const browserSync = require('browser-sync').create();


// Static server
//gulp.task('browser-sync', function() {
//  browserSync.init({
//    server: {
//      baseDir: 'src'
//    }
//  });
//  gulp.watch("src/*.html").on('change', browserSync.reload);
//});


