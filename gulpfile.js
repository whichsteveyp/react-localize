require('babel-register');

const build = require('./tools/build').build;
const githooks = require('./tools/githooks');
const gulp = require('gulp');

// Gulp Tasks
gulp.task('githooks', githooks);
gulp.task('build', build);
