var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/dist');
var COMPONENT_DIR = path.resolve(__dirname, 'src/components');
var SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    COMPONENT_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js',
    publicPath: 'http://localhost:8000/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          "babel-loader"
        ]
      },
      {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: SRC_DIR,
    port: 8000
  }
}
