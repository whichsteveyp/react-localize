import assign from 'lodash/assign';
import babelify from 'babelify';
import browserify from 'browserify';
import envify from 'envify/custom';
import gulp from 'gulp';
import babel from 'gulp-babel';
import source from 'vinyl-source-stream';

//------------------------------------------------------------------------------
// Build Client Assets
//------------------------------------------------------------------------------
export function dist() {
  return browserify('./src/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'));
};

export function build() {
  return gulp.src('./src/**/*.js*')
    .pipe(babel({
      comments: false,
      presets: ['es2015', 'react', 'stage-0'],
      sourceMaps: true
    }))
    .pipe(gulp.dest('build'));
};

