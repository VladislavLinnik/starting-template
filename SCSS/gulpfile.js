var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function(){
    return gulp.src('./src/sass/**/*.scss')
                .pipe(concat('style.css'))
                .pipe(autoprefixer({
                    browsers: ['> 0.1%']
                }))
                .pipe(sass({outputStyle: 'compressed'}))
                .pipe(gulp.dest('./app/css/'))
});

gulp.task('default', ['styles']);

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', ['default']);
});