const { resolve } = require('path');

module.exports = async ({ config }) => ({
    ...config,
    resolve: {
        alias: {
            fonts: resolve(__dirname, '../../public/fonts'),
        },
    },
});
