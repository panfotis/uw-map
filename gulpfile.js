const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const purgecss = require('gulp-purgecss');
const imagemin = require('gulp-imagemin');
const livereload = require('gulp-livereload');




gulp.task('styles', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('purgecss', () => {
    return gulp.src('css/*.css')
        .pipe(purgecss({
            content: ['*.html', 'node_modules/bootstrap/js/src/*.js'],
            safelist: ['dz-remove','dz-default','dz-message']
        }))
        .pipe(gulp.dest('build'))
})

gulp.task('imagemin', () => {
    return del(['images/dist/*']), gulp.src('images/*')
     .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
     .pipe(gulp.dest('images/dist'));
    //  .pipe(notify({ message: 'Images task complete' }));
   })

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('scss/*.scss', (done) => {
        gulp.series(['clean', 'styles', 'purgecss'])(done);
        //gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'purgecss']));