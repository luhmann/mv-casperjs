module.exports = function (grunt) {

    grunt.initConfig({
        casperjs: {
            options: {
                async: {
                    parallel: true
                }
            },
            files: [ 'specs/**/*.js' ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc' 
            }
        },
        files: [
            'Gruntfie.js',
            'specs/**/*.js'
        ]
    })

    // deps
    grunt.loadNpmTasks('grunt-casperjs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
}
