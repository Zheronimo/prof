module.exports = function(){
    $.gulp.task('watch', function(){
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('content.json', $.gulp.series('pug'));
        $.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('sass:dev'));
        $.gulp.watch('src/static/js/libs/*.js', $.gulp.series('scripts:lib'));
        $.gulp.watch('src/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
        $.gulp.watch('works/*', $.gulp.series('folder-transfer'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'), $.gulp.series('svg'));
    });
};