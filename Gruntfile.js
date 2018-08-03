module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['src/*.js'],
				tasks: ['concat', 'babel', 'uglify', 'sass', 'cssmin'],
			},
		},
		concat: {
			dist: {
				src: [
					'src/canvas.js', 
					'src/input.js', 
					'src/nesColors.js', 
					'src/objects.js', 
					'src/backgroundColor.js', 
					'src/floor.js', 
					'src/drawBackGroundLayer.js', 
					'src/mario.js', 
					'src/mushroom.js', 
					'src/brick.js', 
					'src/questionBlock.js', 
					'src/spriteViewer.js', 
					'src/drawSpriteLayer.js', 
					'src/render.js'
				],
				dest: 'build/superMario.js',
			},
		},
		"babel": {
			options: {
				presets: ['es2015'],
			},
			dist: {
				files: {
					'build/superMario.js': 'build/superMario.js'
				},
			},
		},
		uglify: {
			my_target: {
				files: {
					'build/superMario.js': ['build/superMario.js']
				},
			},
		},
		sass: {
			dist: {
				files: {
					'build/style.css': 'src/style.scss'
				},
			},
		},
		cssmin: {
			target: {
				files: {
					'build/style.css': ['src/style.css']
				},
			},
		},
		// browserSync: {
		// 	bsFiles: {
		// 		src : 'css/*.css'
		// 	},
		// 	options: {
		// 		server: {
		// 			baseDir: "./"
		// 		},
		// 	},
		// },
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// grunt.loadNpmTasks('grunt-browser-sync');

	// grunt.registerTask('default', ['concat', 'babel', 'uglify', 'sass', 'cssmin']);

	grunt.registerTask('default', ['watch']);

};
