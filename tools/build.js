import babel from 'gulp-babel';
import gulp  from 'gulp';

//------------------------------------------------------------------------------
// Build ES5 Assets
//------------------------------------------------------------------------------
export function build() {
  return gulp.src('./src/**/*.js*')
    .pipe(babel({
      comments: false,
      presets: ['netflix-dea'],
      sourceMaps: true
    }))
    .pipe(gulp.dest('build'));
};

