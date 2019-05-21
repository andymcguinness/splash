/*
 * File: Gruntfile.js
 * Description: Loads & excutes Grunt tasks
 * Dependencies: grunt-contrib-sass, grunt-contrib-watch
 *
 * @package splash
 *
 */

module.exports = function(grunt) {

  /* Init Config */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          "no-source-map": ''
        },
        files: {
          'css/main.css': 'src/scss/main.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/scss/*.scss', 'src/scss/*/*.scss'],
        tasks: ['sass']
      }
    }
  });

  /* Load Tasks */
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* Register Tasks */
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['sass', 'watch']);
};
