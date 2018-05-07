const gulpAmpValidator = require('gulp-amphtml-validator');
var config  = require('../config');
var gulp    = require('gulp');

function validateTemplates(pathFrom, pathTo) {
    return gulp.src(pathFrom + '/*.html')
        // Validate the input and attach the validation result to the "amp" property
	    // of the file object. 
	    .pipe(gulpAmpValidator.validate())
	    // Print the validation results to the console.
	    .pipe(gulpAmpValidator.format())
	    // Exit the process with error code (1) if an AMP validation error
	    // occurred.
	    .pipe(gulpAmpValidator.failAfterError());
        
}

gulp.task('amphtml:accounts', () => {
	return validateTemplates(config.src.amp.accounts);
});
gulp.task('amphtml:pages', () => {
	return validateTemplates(config.src.amp.pages);
});
gulp.task('amphtml:shares', () => {
	return validateTemplates(config.src.amp.shares);
});

gulp.task('amphtml:validate',['amphtml:shares', 'amphtml:pages', 'amphtml:accounts']);

gulp.task('amphtml:watch', function() {
    gulp.watch(config.src.root + '/../**/*.html', ['amphtml:validate']);
});