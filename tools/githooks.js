import gulp, { symlink } from 'gulp';

//------------------------------------------------------------------------------
// Install git hooks for contributing.
//------------------------------------------------------------------------------
function githooks() {
  return gulp.src('./tools/hooks/pre-commit')
    //`(gulp|vinylFS).symlink` injests folders only
    .pipe(symlink('.git/hooks', { overwrite : true }));
}

export default githooks;
