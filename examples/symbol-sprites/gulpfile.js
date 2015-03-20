var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

var spriteConfig = {
  "mode": {
    "symbol": {
        "dest": "",
        "sprite": "sprite.svg"
    }
}
};

gulp.task('sprites', function () {
    gulp.src('images-source/*.svg')
        .pipe(svgSprite(spriteConfig))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch('images-source/*.svg', ['sprites']);
});