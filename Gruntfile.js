module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    distPath : 'dist/',
    distLibs : 'dist/libs/',

    copy : {
        default : {
            files : [
                {
                    expand: true, 
                    flatten: true, 
                    src: ['bower_components/animate.css/animate*css'], 
                    dest: '<%= distLibs %>', 
                    filter: 'isFile'}
            ]
        }         
    }

  });

  // Grunt modules
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy']);

};