// Karma configuration
// Generated on Thu Mar 07 2019 11:25:44 GMT+0530 (India Standard Time)
var webpackConfig = require('./webpack.config.js');
var path = require('path');
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-aria/angular-aria.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-messages/angular-messages.js',
      './node_modules/angular-material/angular-material.js',
      './node_modules/angular-material-data-table/dist/md-data-table.js',
      './src/app/app.module.js',
      './src/app/post/post.module.js',
      './src/app/post/post.controller.js',
      './src/app/post/post.component.js',
      './src/app/post/post.service.js',
      './src/app/post/post.component.spec.js',
      './src/app/post/post.service.spec.js',
      './src/app/post/post.controller.spec.js'
      // './src/**/*.spec.js' 
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: { loader: 'istanbul-instrumenter-loader' },
            include: path.resolve('src/app/')
          },
          {
            test: /\.(html)$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: false,
                    collapseWhitespace: false
                }
            }]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')
                        ],
                        sourceMap: true
                    }
                }
            ]
        }
        ]
      }

    },
    webpackMiddleware: {
      //turn off webpack bash output when run the tests
      noInfo: true,
      stats: 'errors-only'
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/app/**/*.js':['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
