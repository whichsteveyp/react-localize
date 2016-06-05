require('babel-register');

const build = require('./tools/build').build;
const test = require('./tools/test').test;
const watchTest = require('./tools/test').watchTest;
const githooks = require('./tools/githooks');
const gulp = require('gulp');

// Gulp Tasks
gulp.task('githooks', githooks);
gulp.task('build', build);
gulp.task('test', test);
gulp.task('watchTest', watchTest);
