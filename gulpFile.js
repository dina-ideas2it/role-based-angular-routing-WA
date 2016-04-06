var gulp = require('gulp');
var connect = require('gulp-connect');
var eslint = require('gulp-eslint');
var inject = require('gulp-inject');
var fs = require('fs');
var assets = JSON.parse(fs.readFileSync('./assets.json'));





gulp.task('watch', function() {
  gulp.watch('less/**/*.less', ['less', 'livereload']);
});

gulp.task('livereload', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  var server = connect.server({
    root: './',
    livereload: true,
    //middleware: auth
  });


});

gulp.task('lint', function () {
    return gulp.src(['app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('inject', function () {
  var target = gulp.src('./index.html');
  var sources = gulp.src(assets);
  return target.pipe(inject(sources))
  .pipe(gulp.dest("./"));
});

gulp.task('default', ['watch', 'connect','lint','inject']);





/*gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('less/*.less', ['less']);
});
*/
