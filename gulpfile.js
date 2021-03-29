'use strict';

global.$ = {
    gulp: require('gulp'),
		del: require('del'),
		fs: require('fs'),
		// gcmq: require('gulp-group-css-media-queries'),
		gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series( 
    'clean',
	$.gulp.parallel('pug', 'folder-transfer', 'sass:dev', 'scripts:lib', 'svg', 'fonts', 'scripts', 'img:dev','svg:copy'),
    $.gulp.parallel('watch', 'serve')
));
$.gulp.task('build', $.gulp.series(
    'clean',
	$.gulp.parallel('pug', 'folder-transfer', 'sass:build', 'scripts:lib', 'svg', 'fonts', 'scripts', 'img:build','svg:copy'),
    $.gulp.parallel('watch', 'serve')
));