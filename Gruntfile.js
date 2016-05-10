'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                'Gruntfile.js',
                'src/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: [
            'favicon.ico',
            '*.html',
            'dist'
        ],
        copy: {
            favicon: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/favicon.ico',
                    dest: '.'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/img/*',
                    dest: 'dist/img/'
                }]
            },
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            images: { src: 'dist/img/*' },
            js:     { src: 'dist/js/*' },
            css:    { src: 'dist/css/*' }
        },
        jade: {
            index: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'src/*.jade',
                        '!src/_*.jade',
                    ],
                    dest: '.',
                    ext: '.html',
                }]
            },
        },
        sass: {
            compile: {
                src: 'src/style.scss',
                dest: 'dist/css/style.css'
            }
        },
        usemin: {
            html: ['*.html']
        },
        useminPrepare: {
            options: {
                dest: '.'
            },
            src: ['*.html']
        },
        watch: {
            files: [
                'Gruntfile.js',
                'src/**/*'
            ],
            tasks: ['default'],
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'copy',
        'jade',
        'sass'
    ]);

    grunt.registerTask('release', [
        'clean',
        'default',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'filerev',
        'usemin'
    ]);

};
