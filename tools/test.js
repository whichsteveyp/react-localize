import gulp from 'gulp';
import mocha from 'gulp-mocha';
import util from 'gulp-util';

function test() {
  return gulp.src(['tests/**/*.js'], { read: false })
    .pipe(mocha({ recursive: true, reporter: 'dot' }))
    .on('error', util.log);
}

function watchTest() {
  gulp.watch(['tests/**', 'src/**'], test);
}

export default {
  test,
  watchTest
}
