
module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
	uglify: {
		build: {
			files: {
		   'dist/js/app.js': 'src/js/app.js'
		   // 'dist/js/jquery.js': 'src/js/jquery.js'
		   
			}
		 }
	},
	cssmin: {
	  options: {
	    shorthandCompacting: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'dist/css/style.css': 'src/css/style.css'
	    }
	  }
	},
	imageoptim: {
	  build: {
	    src: ['dist/img', 'dist/img']
		}
	  },
	htmlmin: {                                     
	    build: {                                     
	      options: {                                 
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   
	        'dist/index.html': 'src/index.html'    
	      }
		}
	 }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin']);
};


