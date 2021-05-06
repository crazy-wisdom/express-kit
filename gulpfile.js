const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();


function style() {
  return (
      gulp
          .src('app/sass/**/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass())
          .on("error", sass.logError)
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('public/styles'))
          // Add browsersync stream pipe after compilation
          .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    proxy: "localhost:2000",
    port: 2020
  });
  gulp.watch("app/sass/**/*.scss", style);
}

gulp.task('watch', function() {
  watch();
})

gulp.task('default', gulp.series('watch', function(){
}));
