
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        cssDir: 'css',
        scssDir: 'css/src',
        jsDir: 'js',
        jsLibDir: 'js/lib',
        jsSrcDir: 'js/src',

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            js: {
                files: ['<%= jsLibDir %>/*.js', '<%= jsSrcDir %>/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                },
            },
            css: {
                files: '<%= cssDir %>/src/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            }
        },

        // we use the Sass
        sass: {
            dist: {
                options: {
                    // nested, compact, compressed, expanded
                    style: 'compressed'
                },
                files: {
                    '<%= cssDir %>/main.css': '<%= cssDir %>/src/main.scss'
                }
            }
        },

        // uglify to concat & minify
        uglify: {
            js: {
                expand: true,
                files: {
                    '<%= jsDir %>/main.js': [
                        '<%= jsLibDir %>/modernizr.js',
                        '<%= jsLibDir %>/jquery.js',
                        '<%= jsSrcDir %>/*.js',
                        '<%= jsLibDir %>/respond.js',
                    ],
                }
            }
        }

    });

    // register task
    grunt.registerTask('default', ['watch']);
};