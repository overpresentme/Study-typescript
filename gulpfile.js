var gulp = require("gulp");

/*
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
*/

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');
var fancy_log = require('fancy-log');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['src/*.html']
};
var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,    // 브라우저에서 ts파일 디버깅 가능.
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

// src/*.html -> 복사 -> dist/*.html
gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .on('error', fancy_log)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
}

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle)); // 'default' 실행 전 'copy-html'을 실행
watchedBrowserify.on('update', bundle); // typescript 파일 변경마다 bundle함수 실행.
watchedBrowserify.on('log', fancy_log); // 콘솔 기록.

