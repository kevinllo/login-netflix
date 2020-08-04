const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const compileSass = () => {
    return gulp
     .src('scss/app.scss')
     .pipe(autoprefixer())
     .pipe(sass ({
       outputStyle: 'expanded'
     }))
     .pipe(gulp.dest('css'))
}

const watch = () => {
    gulp.watch('scss/*.scss', compileSass);
}
//Create tasks and call the function
gulp.task('compile', compileSass);
gulp.task('updating', gulp.parallel(watch));
