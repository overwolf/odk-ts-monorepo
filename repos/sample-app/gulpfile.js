/* eslint-disable @typescript-eslint/no-var-requires */
const {src, dest, series} = require('gulp');
const file = require('gulp-file');
const zip = require('gulp-zip');
const del = require('del');
const webpack = require('webpack');
const webpackConfigProd = require('./webpack-prod.config.js');
const webpackConfigDev = require('./webpack.config');
const bump = require('gulp-bump');

function clean() {
  return del([
    'dist/**/*',
    'output/**/*',
  ]);
}

// -----------------------------------------------------------------------------
function runWebpack() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfigProd, (err, stats) => {
      if (err) {
        return reject(err);
      }

      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')));
      }

      resolve();
    });
  });
}

// -----------------------------------------------------------------------------
function runWebpackDev() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfigDev, (err, stats) => {
      if (err) {
        return reject(err);
      }

      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')));
      }

      resolve();
    });
  });
}

// -----------------------------------------------------------------------------
function bumpVersion() {
  let bumpType = 'minor';
  for (let i = 0; i < process.argv.length; ++i) {
    const arg = process.argv[i];
    if (arg.substring(0, '-bump:'.length) === '-bump:') {
      bumpType = arg.substring('-bump:'.length);

      // Looks like node, sometimes, breaks -bump:patch into separate arguments.
      // This will handle such a situation.
      if ((!bumpType) ||
          (bumpType.length === 0 && process.argv.length >= i + 1)) {
        bumpType = process.argv[i + 1];
      }
    }
  }

  return src('./package.json')
    .pipe(bump({type: bumpType}))
    .pipe(dest('./'));
}

// -----------------------------------------------------------------------------
function copyFilesToOutput() {
  return src([
    './dist/**',
    './assets/**',
    './plugins/**/*.dll',
    './plugins/licenses/**',
    './_locales/**',
  ], { base: './' })
    .pipe(dest('./output'));
}

// -----------------------------------------------------------------------------
function modifyMainScriptPath() {
  const pkg = require('./package');
  const config = require('./tsconfig.json');
  const srcRoot = config.compilerOptions.sourceRoot;
  pkg.main = pkg.main.replace(srcRoot, 'dist');
  const pkgString = JSON.stringify(pkg, null, 2);
  return file('package.json', pkgString, { src: true })
    .pipe(dest('./'));
}

// -----------------------------------------------------------------------------
function generateOpk() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pkg = require('./package');
  return src([
    './output/**',
    '!./output/dist/source-map',
    '!./output/dist/source-map/**/*',
    '!./output/**/*.opk',
    '!./output/**/*.zip',
  ])
    .pipe(zip(`${pkg.name}-${pkg.version}.opk`))
    .pipe(dest('./output/'));
}

// -----------------------------------------------------------------------------
function zipSourceMaps() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pkg = require('./package');
  return src(['./output/dist/source-map/**'])
    .pipe(zip(`${pkg.name}-${pkg.version}.map.zip`))
    .pipe(dest('./output/'));
}

const buildProd = series(
  runWebpack,
  modifyMainScriptPath,
  copyFilesToOutput,
  generateOpk,
  zipSourceMaps
);

const buildDev = series(
  runWebpackDev,
  modifyMainScriptPath
)

exports.clean = clean;
exports.runWebpack = runWebpack;
exports.runWebpackDev = runWebpackDev;
exports.opk = generateOpk;
exports.bump = bumpVersion;
exports.buildProd = buildProd;

exports.build = series(clean, bumpVersion, buildProd);
exports.dev = series(clean, buildDev);