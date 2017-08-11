'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    jsonminify = require('gulp-jsonminify'),
    image = require('gulp-image'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    jsonlint = require("gulp-jsonlint"),
    reload = browserSync.reload;

const dir = '../static/cosmeticsyou';
var path = {
build: {
    html: '../home/templates',
    snippets: dir + '/snippets/',
    js: dir + '/js/',
    css: dir + '/css/',
    img: dir + '/img/',
    fonts: dir + '/fonts/'
},
src: { 
    html: 'src/*.pug', 
    js: 'src/js/*.js',
    style: 'src/scss/*.scss',
    snippets: 'src/snippets/*/*.pug',
    img: 'src/img/**/*',
    fonts: 'src/fonts/**/*.*'
},
watch: {
    html: 'src/**/*.pug',
    js: 'src/**/*.js',
    style: 'src/**/*.scss',
    image: 'src/img/**/*',
    fonts: 'src/fonts/**/*.*'
},
clean: './cosmeticsyou'
};
gulp.task('lint', () => {
    gulp.src(path.watch.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('clean', (cb) => {
    rimraf(path.clean, cb);
});

gulp.task('html', () => {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger())
        .pipe(pug()) //
        .pipe(gulp.dest(path.build.html)); //Выплюнем их в папку build
    gulp.src(path.src.snippets) //Выберем файлы по нужному пути
        .pipe(pug()) //
        .pipe(gulp.dest(path.build.snippets))
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('fastjs', ['lint'], () => {
    process.NODE_ENV = 'development';

    gulp.src(path.src.js)
        .pipe(rigger()) 
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.init()) 
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.js))
});
gulp.task('source', () => {
    process.NODE_ENV = 'production';

    gulp.src(path.src.js) 
        .pipe(rigger()) 
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.init()) 
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.js))
});

gulp.task('faststyles', () => {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(compass({
            config_file: './config.rb',
            css: 'build/css',
            sass: 'src/scss',
            img: 'src/img'
        }))
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('styles', () => {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(compass({
      		config_file: './config.rb',
      		css: 'build/css',
      		sass: 'src/scss',
      		img: 'src/img'
    	}))
        .pipe(prefixer())
        //Compress
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('fastimages', () => {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img));
});

gulp.task('images', () => {
    gulp.src(path.src.img)
        .pipe(image())
        .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts', () => {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('fastmedia', ['fonts', 'fastimages']);
gulp.task('media', ['fonts', 'images']);

gulp.task('production', [
    'html',
    'source',
    'media',
    'styles'
]);

gulp.task('development', [
    'html',
    'fastjs',
    'fastmedia',
    'faststyles'
]);

gulp.task('watch', function() {
    watch([path.watch.html], ['html']);
    watch([path.watch.style], ['faststyles']);
    watch([path.watch.js], ['fastjs']);
    watch([path.watch.image], ['fastimages']);
    watch([path.watch.fonts], ['fonts']);
});

gulp.task('default', ['development', 'watch']);
gulp.task('deploy', ['production']);

