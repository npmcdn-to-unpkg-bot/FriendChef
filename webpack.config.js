var webpack = require('webpack');

var BUILD_DIR = __dirname +  '/client/compiled';
var APP_DIR = __dirname + '/client/src';

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],
  module: {
    loaders: [
      {
        test:/\.jsx?/,
        include:APP_DIR,
        loader:'babel'
      }
    ]
  }
};
