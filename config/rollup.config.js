const {
    distPath,
    libPath,
    publicPath,
    typesPath,
} = require('./paths');

const babel = require('rollup-plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');
const { resolve } = require('path');
const rollupResolve = require('@rollup/plugin-node-resolve');
const smartAsset = require('postcss-smart-asset');
const { terser } = require('rollup-plugin-terser');
const visualizer = require('rollup-plugin-visualizer');

const { analyze } = process.env;
const fontsRegex = /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/;

module.exports = {
    external: [
        '@babel/runtime',
        'moment',
        'prop-types',
        'react',
        'react-dates',
        'react-dom',
        'react-router-dom',
        'react-table',
        'react-with-direction',
        'styled-components',
    ],
    input: resolve(__dirname, `${libPath}/index.js`),
    output: [
        {
            file: resolve(__dirname, `${distPath}/index.js`),
            format: 'umd',
            globals: {
                moment: 'moment',
                'prop-types': 'PropTypes',
                react: 'React',
                'react-dates': 'reactDates',
                'react-router-dom': 'ReactRouterDOM',
                'styled-components': 'styled',
            },
            name: 'DexelsUIKit',
        },
        {
            file: resolve(__dirname, `${distPath}/index.esm.js`),
            format: 'esm',
        },
    ],
    plugins: [
        rollupResolve(),
        commonjs({
            exclude: 'src/**',
        }),
        postcss({
            extract: resolve(__dirname, `${distPath}/main.css`),
            minimize: true,
            plugins: [
                // Drops the preceeding '~', which are needed for Storybook webpack conf loaders
                smartAsset({
                    emitFiles: false,
                    filter: fontsRegex,
                    url: (asset) => asset.url.substr(1),
                }),
                // Copies fonts
                smartAsset({
                    assetsPath: resolve(__dirname, `${distPath}/fonts`),
                    basePath: resolve(__dirname, publicPath),
                    filter: fontsRegex,
                    url: 'copy',
                    useHash: true,
                }),
            ],
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        terser(),
        copy({
            targets: [{
                dest: distPath,
                src: `${typesPath}/index.d.ts`,
            }],
            verbose: true,
        }),
        ...analyze ? [visualizer()] : [],
    ],
};
