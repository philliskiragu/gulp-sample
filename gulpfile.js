/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-18T14:41:20+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-18T17:09:37+03:00
*/



var gulp = require('gulp');
var sass = require ('gulp-sass');

gulp.task('default', function() {
  console.log('Hello Phillo');
});

//converting sass to css
gulp.task('sass', function(){
  return gulp.src('css/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'));
});
