const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const { distPath } = require('./paths');

module.exports = () => (
    merge(baseConfig(), {
        devServer: {
            contentBase: resolve(__dirname, distPath),
            historyApiFallback: true,
            hot: true,
            open: true,
            publicPath: '/',
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    })
);
