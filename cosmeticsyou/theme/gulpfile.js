'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
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
const path = {
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
        html: './src/**/*.pug',
        js: './src/**/*.js',
        style: './src/**/*.scss',
        image: './src/img/**/*',
        fonts: './src/fonts/**/*.*'
    },
    clean: './../static/cosmeticsyou'
};
gulp.task('lint', () => {
    gulp.src(path.watch.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('clean', (cb) => {
    rimraf(path.clean, cb);
});
const scssPathes = [
  'node_modules/susy/sass', 
  'node_modules/breakpoint-sass/stylesheets',
  'node_modules/bootstrap-sass/assets/stylesheets',
  'node_modules/font-awesome-sass/assets/stylesheets/',
  'node_modules/semantic-ui-sass/',
  'node_modules/slick-carousel/slick',
  'node_modules/compass-mixins/lib'
];
const settings = {
  src: './src',
  build: './../static/cosmeticsyou'
};

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

gulp.task('fastjs', () => {
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
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
          includePaths: scssPathes
        }).on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css));
});


gulp.task('styles', () => {
  return gulp.src(path.src.style)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: scssPathes
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
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
    gulp.watch(settings.src + '/**/*.scss', ['faststyles']);
    gulp.watch(settings.src + '/img/**/*.*', ['fastimages']);
    gulp.watch(settings.src + '/**/*.js', ['fastjs']);
    gulp.watch(settings.src + '/*.pug', ['html']);
});

gulp.task('default', ['development', 'watch']);
gulp.task('deploy', ['production']);

