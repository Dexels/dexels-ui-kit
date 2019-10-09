const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { distPath, srcPath } = require('./paths');

module.exports = () => ({
    entry: {
        'dexels-ui-kit': `${srcPath}/index.js`,
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
        ],
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        path: distPath,
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
        ],
    },
});
