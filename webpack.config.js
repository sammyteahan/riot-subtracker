var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    buildPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new ExtractTextPlugin('/main.css')
  ],
  module: {
    preLoaders: [
      { 
        test: /\.tag$/, 
        exclude: /node_modules/, 
        loader: 'riotjs-loader', 
        query: { type: 'none' } 
      }
    ],
    loaders: [
      { 
        test: /\.js|\.tag$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        )
      }
    ]
  }
};