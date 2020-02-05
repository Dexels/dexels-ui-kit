const {
    distPath,
    libPath,
} = require('./paths');

const babel = require('rollup-plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');
const postcssUrl = require('postcss-url');
const { resolve } = require('path');
const rollupResolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const visualizer = require('rollup-plugin-visualizer');

const { analyze } = process.env;

module.exports = {
    external: [
        '@babel/runtime',
        'moment',
        'react',
        'react-dates',
        'react-dom',
        'react-loading-skeleton',
        'react-router-dom',
        'react-table',
        'react-with-direction',
        'styled-components',
    ],
    input: resolve(__dirname, `${libPath}/index.ts`),
    output: [
        {
            file: resolve(__dirname, `${distPath}/index.js`),
            format: 'umd',
            globals: {
                moment: 'moment',
                react: 'React',
                'react-dates': 'reactDates',
                'react-loading-skeleton': 'reactSkeleton',
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
                // Drops the preceeding '~' (needed for Storybook webpack loaders) &
                // removes intermediate dirs from font imports
                postcssUrl({
                    filter: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    url: (asset) => `fonts/${asset.url.substr(1).split('/').pop()}`,
                }),
            ],
        }),
        typescript({
            objectHashIgnoreUnknownHack: true,
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        terser(),
        copy({
            // src must be relative to project root for copy to work both on Win & Unix hosts
            targets: [{
                dest: resolve(__dirname, `${distPath}/fonts`),
                src: 'public/fonts/**/*.*',
            }],
            verbose: true,
        }),
        ...analyze ? [visualizer()] : [],
    ],
};
