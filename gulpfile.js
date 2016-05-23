var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var prettify = require('gulp-prettify');

// The tasks
gulp.task('sass', function(){
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('assets/stylesheets'))
});

gulp.task('jade', function() {
  return gulp.src(['html/jade/components/*.jade', 'html/jade/pages/*.jade'])
    .pipe(jade()) // pip to jade plugin
    .pipe(gulp.dest('html/ugly')); // tell gulp our output folder
});

gulp.task('prettify', function() {
  gulp.src('html/ugly/**/*.html')
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('html'))
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch(['html/jade/**/*.jade', 'html/jade/**/*.html'], ['jade']);
  gulp.watch('html/ugly/*.html', ['prettify']);
});


