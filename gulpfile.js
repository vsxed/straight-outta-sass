var gulp     = require('gulp'),
    queue    = require('streamqueue'),
    $        = require('gulp-load-plugins')();

var src = {
		"root": "./",
		"sass": "./sass/",
	},

	dest = {
		"css": "./dist/",
	};

gulp.task('build-css', [], function() {
	queue({ objectMode: true},
		gulp.src([src['sass'] + '*.scss']).
            pipe($.sass().on('error', $.sass.logError)).
            pipe($.autoprefixer({
            	browsers: [
            	'Android >= 4.1',
            	'Firefox >= 26',
            	'iOS >= 7',
            	'Safari >= 5',
            	'Explorer >= 8'
            	]
            }))
		).
		pipe($.concat('module.grid.css')).
		pipe(gulp.dest(dest['css']))
});

gulp.task('watch', function() {
	gulp.watch(src['sass'] + '**/*.scss', ['build-css']);
});

