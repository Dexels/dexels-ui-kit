const babel = require('rollup-plugin-babel');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');
const postcssUrl = require('postcss-url');
const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const typescript = require('@rollup/plugin-typescript');

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
    input: 'src/lib/index.ts',
    output: [
        {
            file: 'index.js',
            format: 'cjs',
        },
    ],
    plugins: [
        resolve(),
        postcss({
            extract: 'main.css',
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
        typescript(),
        babel({
            exclude: 'node_modules/**',
            extensions: [
                'ts',
                'tsx'
            ],
        }),
        terser(),
        copy({
            // src must be relative to project root for copy to work both on Win & Unix hosts
            targets: [{
                dest: 'fonts',
                src: 'public/fonts/**/*.*',
            }],
            verbose: true,
        }),
    ],
};
