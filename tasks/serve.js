var gulp = require('gulp');
var webserver = require('gulp-webserver');
var exec = require('child_process').exec;

// gulp.task('serve', ['watch'], function() {
//   gulp.src(['app', 'build'])
//     .pipe(webserver({
//       open: false
//     }));
// });

gulp.task('run', ['watch'], function() {
  return exec('node index.js');
});
