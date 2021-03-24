/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = ({ config }) => {
    const customConfig = { ...config };

    // TypeScript loader
    customConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
        ],
    });

    // extensions
    customConfig.resolve.extensions.push('.ts', '.tsx');

    // fonts
    customConfig.resolve.alias = {
        fonts: resolve(__dirname, '../../public/fonts'),
    };

    return customConfig;
};
