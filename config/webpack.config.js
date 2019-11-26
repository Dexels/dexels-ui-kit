const {
    distPath,
    libPath,
    publicPath,
    typesPath,
} = require('./paths');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { resolve } = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env = {}) => ({
    entry: resolve(__dirname, `${libPath}/index.js`),
    externals: {
        '@babel/runtime': '@babel/runtime',
        moment: 'moment',
        'prop-types': 'prop-types',
        react: 'react',
        'react-dates': 'react-dates',
        'react-dom': 'react-dom',
        'react-table': 'react-table',
        'react-with-direction': 'react-with-direction',
        'styled-components': 'styled-components',
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
        libraryTarget: 'umd',
        path: distPath,
        publicPath: '/',
        umdNamedDefine: true,
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: env.analyze ? 'server' : 'disabled',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'index.d.ts',
                'index.js',
                'fonts',
                'main.css',
            ],
        }),
        new CopyPlugin([
            {
                from: `${typesPath}/index.d.ts`,
                to: distPath,
            },
        ]),
        new MiniCSSExtractPlugin({
            filename: '[name].css',
        }),
        new MomentLocalesPlugin(),
    ],
    resolve: {
        alias: {
            fonts: resolve(__dirname, `${publicPath}/fonts`),
        },
    },
});
