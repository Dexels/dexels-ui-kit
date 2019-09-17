const { resolve } = require('path');

module.exports = {
  distPath: resolve(__dirname, './../dist'),
  publicPath: resolve(__dirname, './../public'),
  srcPath: resolve(__dirname, './../src'),
};
