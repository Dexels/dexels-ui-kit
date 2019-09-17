const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    ],
  },
  output: {
    filename: '[name].[hash].min.js',
    path: distPath,
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: publicPath,
        to: distPath,
      },
    ]),
    new HtmlWebpackPlugin({
      template: `${srcPath}/templates/index.html`,
    }),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: [
      '.js',
      '.jsx',
    ],
  },
});
