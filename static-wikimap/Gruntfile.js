'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    nodemon: {
      src: {
        script: 'app.js',
        options: {
          args: ['development'],
          nodeArgs: ['--debug'],
          ignore: ['*.md', 'node_modules/**'],
          ext: 'js,css',
          watch: ['lib', 'routes', 'views'],
          delayTime: 1,
          env: {
            PORT: '4000'
          },
          cwd: __dirname
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: '*.html'
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: ['nodemon:src', 'watch']
    }
  });

  // Default task(s).
  //grunt.registerTask('default', ['concurrent:dev']);
  grunt.registerTask('default', 'My start task description', function() {
    grunt.util.spawn({
      cmd: 'st',
      args: ['-nc']
    });
    grunt.task.run('watch');
  });
};