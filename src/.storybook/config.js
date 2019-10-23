import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';
import { addDecorator, addParameters, configure } from '@storybook/react';
import React from 'react';
import themeBasic from '../app/styles/theming/basic';
import themeLight from '../app/styles/theming/light';
// This seems like a ESLint bug
// eslint-disable-next-line import/no-unresolved
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

// Make info and knobs addons available in all stories
addDecorator(withInfo);
addDecorator(withKnobs);

addDecorator(withThemesProvider([
    {
        ...themeBasic,
        name: 'Basic',
    },
    {
        ...themeLight,
        name: 'Light',
    },
]));

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

// Make it possible to switch between background-colors
addParameters({
    backgrounds: [
        {
            default: true,
            name: 'light',
            value: themeBasic.colorLight.light,
        },
        {
            name: 'intermediate',
            value: themeBasic.colorMedium.main,
        },
        {
            name: 'dark',
            value: '#212121',
        },
        {
            name: 'blue',
            value: themeBasic.colorSecondary.dark,
        },
        {
            name: 'purple',
            value: themeBasic.colorPrimary.dark,
        },
    ],
});

// Import all stories
configure(require.context('../app/components/organisms/Tabs', true, /\.stories\.js$/), module);
// configure(require.context('../app', true, /\.stories\.js$/), module);
