import babel      from 'gulp-babel';
import babelify   from 'babelify';
import browserify from 'browserify';
import gulp       from 'gulp';
import source     from 'vinyl-source-stream';

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
      presets: ['netflix-dea'],
      sourceMaps: true
    }))
    .pipe(gulp.dest('build'));
};

