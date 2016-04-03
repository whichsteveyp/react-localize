import gulp from 'gulp';
import symlink from 'gulp-symlink';

//------------------------------------------------------------------------------
// Install git hooks for contributing.
//------------------------------------------------------------------------------
function githooks() {
  return gulp.src('./tools/pre-commit')
    .pipe(symlink('.git/hooks/pre-commit', { force: true }));
}

export default githooks;
