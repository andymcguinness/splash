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
  grunt.initConfig({});

  /* Load Tasks */
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* Register Tasks */
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['sass', 'watch']);
};
