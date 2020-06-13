import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

var env = process.env.NODE_ENV;
var config = {
  input: 'src/index.js',
  plugins: [
    nodeResolve({
      mainFields: ['jsnext:main', 'main', 'module'],
    }),
    commonjs({
      include: 'node_modules/**'

      // explicitly specify unresolvable named exports
      // (see below for more details)
      // namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  external: ['react', 'prop-types'],
  output: {
    format: 'umd',
    name: 'ReactLocalize',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },
  context: 'this',
};

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;
