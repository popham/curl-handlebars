module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha_phantomjs: {
        	test: ['test/*.html']
        },
        replace: {
            index: {
                options: {
                    prefix: '',
                    patterns: [{
                        match: 'run.js',
                        replacement: 'dist-run.js'
                    }]
                },
                files: [{
                    flatten: true,
                    src: ['test/index.html'],
                    dest: 'test/dist-index.html'
                }]
            }
        },
        exec: {
            cram: {
                cwd: 'test/',
                cmd: function() {
                    return 'node ../node_modules/cram run.js -o dist-run';
                }
            }
        },
        clean: {
            dist: ['test/dist-*']
        }
    });

    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('test', ['exec:cram', 'replace:index', 'mocha_phantomjs:test', 'clean:dist']);
};
