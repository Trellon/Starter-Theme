module.exports = function(grunt) {
  
  // CONFIG
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    // COMPASS
    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'expanded',
          sourcemap: true,
          bundleExec: true
        }
      },
      gen: {
        options: {
          sassDir: 'styleguide-template/sass',
          cssDir: 'styleguide-template/public',
          outputStyle: 'expanded',
          sourcemap: true,
          bundleExec: true,
          watch: false
        }
      },
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
    },
    
    // libsass
    sass: {
      options: {
        includePaths: ['bower_components/breakpoint-sass/stylesheets', 'bower_components/fontography/stylesheets', 'bower_components/compass-mixins/lib', 'bower_components/zen-grids/stylesheets', 'bower_components/Sassy-Buttons/stylesheets'],
        sourceMap: true,
        sourceComments: true
      },
      dist: {
        files: {
          //'main.css': 'main.scss'
          'css/styles.css': 'sass/styles.scss'
        }
      }
    },
    
    // KSS - STYLEGUIDES
    kss: {
      options: {
        includePath: '/css/styles.css',
        includeType: 'css',
        template: 'styleguide-template',
      },
      dist: {
        files: {
          'styleguide': ['sass']
        }
      }
    },
    
    // COPY FILES
    copy: {
      styleguide: {
        files: [
          // copy all css files when making the site
          {expand: true, src: ['css/**'], dest: 'styleguide/public/site'},
          {expand: true, src: ['images/**'], dest: 'styleguide/public/site'},
          {expand: true, src: ['js/**'], dest: 'styleguide/public/site'},
        ],
      },
      
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
                
          // includes files within path and its sub-directories
          {expand: true, src: ['path/**'], dest: 'dest/'},
          
          // makes all src relative to cwd
          {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
          
          // flattens results to a single level
          {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
          ],
      },
    },    
    
    // WATCH
    watch: {
      // css: {
      //   files: 'sass/**/*.scss',
      //   tasks: ['compass:dev']
      // },
  		// scss: {
  		//   files: '**/*.scss',
      //  tasks: ['compass:dev']
  		// },
      sass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },

      // kss: {
      //  files: ['styleguide-template/**/*.scss','sass/**/*.scss'],
      //  tasks: ['compass:gen','kss','copy:styleguide']
      // },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: { livereload: true },
        files: ['css/**.css'],
      },
    },
    

  });  
  
  // PLUGINS
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-contrib-copy');  

  // TASKS
  // grunt.registerTask('default',['compass:dev']);
  grunt.registerTask('default',['watch']);
  grunt.registerTask('watchme',['watch:css']);
  grunt.registerTask('styleguide', ['kss']);
  grunt.registerTask('sggen', ['watch:kss']);

};
