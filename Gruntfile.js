module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha_phantomjs: {
        	src: ['test/index.html']
        }
    });

    grunt.loadNpmTasks('grunt-mocha-phantomjs');

    grunt.registerTask('test', ['mocha_phantomjs']);
};
