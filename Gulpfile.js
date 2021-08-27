// Gulp
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const file = require('gulp-file')
const filter = require('gulp-filter')
const uglify = require('gulp-uglify')
const clean = require('gulp-clean')
// Rollup
const { rollup } = require('rollup')
const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

// Const
const buildPath = 'dist/'

/**
 * Generate scripts with commonjs module
 * @param {import('rollup').RollupBuild} bundle
 */

async function bundle(option) {
  const bundle = await rollup({
    input: 'src/index.js',
    plugins: [
      nodeResolve({ browser: true }),
      getBabelOutputPlugin({
        allowAllFormats: true,
        presets: [['@babel/preset-env', { modules: "auto" }]],
      }),
    ],
  })
  return bundle.generate(option)
}

gulp.task('build', async function () {
  const esmbundle = await bundle({
    format: 'esm',
    name: 'VueAxios',
  })
  const cjs = await bundle({
    format: 'umd',
    name: 'VueAxios',
  })
  const f = filter(['*', '!**/*.js.map'], { restore: true })
  const data = [
    { name: 'vue-axios.esm.min.js', bundle: esmbundle },
    { name: 'vue-axios.common.min.js', bundle: cjs },
  ]
  data.map((t) => {
    return file(t.name, t.bundle.output.map((o) => o.code).join(' '), {
      src: true,
    })
      .pipe(plumber())
      .pipe(f)
      .pipe(uglify())
      .pipe(gulp.dest(buildPath))
  })
})

gulp.task('clean', function () {
  return gulp.src('dist/*').pipe(
    clean({
      force: true,
    }),
  )
})

gulp.task('default', gulp.series('clean', 'build'))
