var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', 
    ['copy:watch',
    'webpack:watch',
    'sass:watch',
    'html:watch',
    // 'amphtml:watch'
]);