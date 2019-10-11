const { distPath, libPath, publicPath } = require('./paths');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { resolve } = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env = {}) => ({
    entry: resolve(__dirname, `${libPath}/index.js`),
    externals: {
        'prop-types': {
            amd: 'prop-types',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            root: 'PropTypes',
            umd: 'prop-types',
        },
        react: {
            amd: 'react',
            commonjs: 'react',
            commonjs2: 'react',
            root: 'React',
            umd: 'react',
        },
        'react-dom': {
            amd: 'react-dom',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            root: 'ReactDOM',
            umd: 'react-dom',
        },
        'styled-components': {
            amd: 'styled-components',
            commonjs: 'styled-components',
            commonjs2: 'styled-components',
            root: 'styled',
            umd: 'styled-components',
        },
    },
    mode: 'production',
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                sideEffects: false,
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            publicPath: 'fonts',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        filename: 'index.js',
        library: 'DexelsUIKit',
        libraryTarget: 'commonjs2',
        path: distPath,
        publicPath: '/',
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: env.analyze ? 'server' : 'disabled',
        }),
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        alias: {
            fonts: resolve(__dirname, `${publicPath}/fonts`),
        },
    },
});
