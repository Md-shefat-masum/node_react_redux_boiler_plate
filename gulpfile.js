const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function react() {
    return browserify({
        entries: './src/index.js',
        debug: true,
    })
        .transform(babelify, { presets: ['@babel/preset-env', '@babel/preset-react'] })
        .bundle()
        .pipe(source('backend.js'))
        .pipe(gulp.dest('./dist'));
};

function react_build() {
    return browserify({
        entries: './src/index.js',
        debug: true,
    })
        .transform(babelify, { presets: ['@babel/preset-env', '@babel/preset-react'] })
        .bundle()
        .pipe(source('backend.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
};

exports.react = function(){
    gulp.watch('src/*', gulp.series(react));
};
exports.react_build = function(){
    gulp.watch('src/*', gulp.series(react_build));
};
exports.default = function(){
    gulp.watch('src/*', gulp.series(bundle));
}