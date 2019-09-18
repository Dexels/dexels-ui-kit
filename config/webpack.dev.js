const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = () => (
    merge(baseConfig(), {
        devServer: {
            contentBase: resolve(__dirname, './../dist'),
            historyApiFallback: true,
            hot: true,
            open: true,
            publicPath: '/',
        },
        devtool: 'inline-source-map',
    })
);
