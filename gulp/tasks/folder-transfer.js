module.exports = function(){
	$.gulp.task('folder-transfer', () => {
		return $.gulp.src('works/**/*')
		.pipe($.gulp.dest('build/works/'))
		.pipe($.bs.reload({
			stream: true
		}));
	});
};