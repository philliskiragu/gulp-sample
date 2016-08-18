/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-18T14:41:20+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-19T01:43:42+03:00
*/



var gulp = require('gulp');
var sass = require ('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');

gulp.task('default', function() {
  console.log('Hello Phillo');
});

//converting sass to css
gulp.task('sass', function(){
  return gulp.src('css/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({ // add this line to enable live loading
      stream: true
    }));
});

gulp.task('watch',['browserSync', 'sass'], function(){
  gulp.watch('css/styles.scss', ['sass']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'Gulp_Project'
    },
  });
});

gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulp.dest('js'));
});
