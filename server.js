var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var boundIp = '0.0.0.0';

const manifest = require('./src/manifest.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, boundIp, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://' + boundIp + ':3000/');
});
