/* Require Plugins */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    lr = require('tiny-lr')(),
    express = require('express'),
    app = express(),
    autoprefixer = require('gulp-autoprefixer');


/* Setup Configs */
var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;

function notifyLivereload(event) {
  var fileName = require('path').relative(EXPRESS_ROOT, event.path); 
  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('startLivereload', function() {
  lr.listen(LIVERELOAD_PORT);
});

gulp.task('startExpress', function () {
  app.use(require('connect-livereload')());
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
});
 

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./themes/style'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch(['themes/style/*.css','index.html'], notifyLivereload);
});
 
// Default Task
gulp.task('default',['startExpress','startLivereload','watch']);