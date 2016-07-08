module.exports = function (grunt) {

    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'app/tripzilla.html', dest: 'cleancss/front-page.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'cleancss/front-page.css', dest: 'cleancss/front-page.css' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin']);

};