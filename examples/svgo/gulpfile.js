var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('svgo', function() {
	console.log("\n Minifying SVG \n");
    return gulp.src('images-source/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('images'));

});

gulp.task('watch', function() {
	gulp.watch('images-source/*.svg', ['svgo']);
});
