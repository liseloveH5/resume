var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');


//当前根目录
var baseUrl = "app/";
//当前时间戳
var cacheDate = new Date().getTime();



// 样式
gulp.task('styles', function() {
    return gulp.src([baseUrl+'scss/main.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        //.pipe(sass({outputStyle: 'expanded'}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(cssnano())
        .pipe(gulp.dest(baseUrl+"css"))
});


//.pipe(sass({outputStyle: 'compressed'}))

//添加监听
gulp.task('watch', function() {

    // 看守所有.scss文档
    gulp.watch(baseUrl+'scss/**.scss', ['styles']);

    // Create LiveReload server
    livereload.listen();

    gulp.watch(['app/css/main.css','app/js/**.js','index.html']).on('change', livereload.changed);
});