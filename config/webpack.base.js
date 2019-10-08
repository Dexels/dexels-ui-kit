const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { distPath, publicPath, srcPath } = require('./paths');

module.exports = () => ({
    entry: {
        'dexels-ui-kit': `${srcPath}/index.js`,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                exclude: /(node_modules)/,
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: 'index.js',
        path: distPath,
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: publicPath,
                to: distPath,
            },
        ]),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
        ],
    },
});
