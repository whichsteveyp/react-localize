require('babel/register');

const githooks = require('./tools/githooks');
const gulp = require('gulp');

// Gulp Tasks
gulp.task('githooks', githooks);
