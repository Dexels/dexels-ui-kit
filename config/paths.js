const { resolve } = require('path');

module.exports = {
    distPath: resolve(__dirname, './../'),
    libPath: resolve(__dirname, './../src/lib'),
    publicPath: resolve(__dirname, './../public'),
};
