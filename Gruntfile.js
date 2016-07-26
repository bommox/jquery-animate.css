module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    distPath :  'dist/',
    distLibs :  'dist/libs/',
    banner:     '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',

    copy : {
        default : {
            files : [
                {
                    expand: true, 
                    flatten: true, 
                    src: ['bower_components/animate.css/animate*css'], 
                    dest: '<%= distLibs %>', 
                    filter: 'isFile'
                },{
                    expand: true, 
                    flatten: true, 
                    src: ['src/*.js'], 
                    dest: '<%= distPath %>', 
                    filter: 'isFile'               
                },
            ]
        }         
    },

    uglify: {
	  options: {
	        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      default: {
        src: '<%= distPath %><%= pkg.name %>.js',
        dest: '<%= distPath %><%= pkg.name %>.min.js'
      }
    }

  });

  // Grunt modules
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['copy','uglify']);

};