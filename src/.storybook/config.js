import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { getAvailableThemeLayouts } from '../app/styles/theme/layout';
import { getAvailableThemeModes } from '../app/styles/theme/theme';
import React from 'react';
// This seems like a ESLint bug
// eslint-disable-next-line import/no-unresolved
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

// Make info and knobs addons available in all stories
addDecorator(withInfo);
addDecorator(withKnobs);

const themes = getAvailableThemeModes().map((themeMode) => ({
    layout: getAvailableThemeLayouts()[0],
    mode: themeMode,
    name: themeMode,
}));

addDecorator(withThemesProvider(themes));

// Wrap all stories in the ThemeProvider and render the BaseStyling
addDecorator((storyFn) => (
    <div style={{
        margin: '40px auto',
        width: '80%',
    }}
    >
        {storyFn()}
    </div>
));

addParameters({
    backgrounds: [
        {
            default: true,
            name: 'light',
            value: '#FFFFFF',
        },
        {
            name: 'intermediate',
            value: '#BFC8D3',
        },
        {
            name: 'dark',
            value: '#212121',
        },
    ],
});

// Import all stories
configure(require.context('../app', true, /\.stories\.js$/), module);
