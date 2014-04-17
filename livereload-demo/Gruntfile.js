'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Project configuration.
  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: '*.html'
      }
    }
  });

  grunt.registerTask('default', 'My start task description', function() {
    grunt.util.spawn({
      cmd: 'st',
      args: ['-nc']
    });
    grunt.task.run('watch');
  });
};
