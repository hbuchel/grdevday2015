var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

var spriteConfig = {
  mode: {
    css: {         
      bust: false,
      dest: '',
      sprite: 'sprite.svg',
      render: {
          scss: true,
          scss: {
              template: 'sprites-template.scss',
              dest: '_sprites.scss'
          }
      }
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