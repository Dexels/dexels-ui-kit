module.exports = {
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-backgrounds',
        '@storybook/addon-notes/register-panel',
        'storybook-addon-styled-component-theme/dist/',
    ],
    stories: ['../**/*.stories.tsx'],
};
