module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Uglify plugin code
        uglify: {
            options: {
                // Adds a comment line to the top of build files w/ name and date
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
            },
            build: {
                // Tells uglify where to get source code and where to build destination code (client only)
                src: 'client/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        // Copy plugin code
        copy: {
            main: {
                // Gets the angular JS library and copies it over to the client build
                expand: true,
                // CWD == current working directory, so where we get files from
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendor/"
            }
        }
    });

    // Tells grunt what order to load tasks/plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default tasks
    grunt.registerTask('default', ['copy', 'uglify']);
};