'use strict'

const webpack = require('webpack');

module.exports = {
  entry: './server/js/app.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};
