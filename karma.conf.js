var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'node_modules/babel-core/browser-polyfill.js',
      './src/**/__tests__/*.js'
    ],
    exclude: [
      'node_modules',
      './src/**/__tests__/*Utils.js' 
    ],
    preprocessors: {
      './src/**/*.js': ['webpack'],
      './test/**/*.js': ['webpack']
    },

    webpack: {
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      },
      plugins: []
    },

    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS', 'Chrome'],
    singleRun: false,

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-babel-preprocessor',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ]
  });
}
