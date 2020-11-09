const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = () => {
  return merge(common(), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      inline: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      watchOptions: {
        index: 'index.html',
        open: true,
        poll: true,
        watchContentBase: true
      }
    }  
  });
};
