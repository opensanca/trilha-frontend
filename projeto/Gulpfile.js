var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('cssmin', function () {
    gulp.src('css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('htmlmin', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

 
gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function() {
    gulp.src('libs/**/*')
        .pipe(gulp.dest('dist/libs/'))
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
    gulp.src('images/**/*')
        .pipe(gulp.dest('dist/images/'))
});


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));

});


gulp.task('concat', function() {
    return gulp.src('./*.scss')
       .pipe(concat('all.scss'))
       .pipe(gulp.dest('./dist/'));
});


gulp.task('sass', function () {
  return gulp.src('css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('css/**/*.scss', ['sass']);
});

gulp.task('default', ['cssmin', 'htmlmin', 'compress', 'copy', 'sass']);

