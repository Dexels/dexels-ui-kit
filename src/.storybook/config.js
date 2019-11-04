import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { addDecorator, addParameters, configure } from '@storybook/react';
import moment from 'moment';
import React from 'react';
import themeBasic from '../app/styles/theming/themes/basic';
import themeLight from '../app/styles/theming/themes/light';
// This seems like a ESLint bug
// eslint-disable-next-line import/no-unresolved
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

// Set Moment locale to Dutch
moment.locale('nl');

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
            value: themeBasic.shades.nine,
        },
        {
            name: 'intermediate',
            value: themeBasic.shades.five,
        },
        {
            name: 'dark',
            value: '#212121',
        },
        {
            name: 'blue',
            value: themeBasic.colorSecondary,
        },
        {
            name: 'purple',
            value: themeBasic.colorPrimary,
        },
    ],
});

// Import all stories
configure(require.context('../app', true, /\.stories\.js$/), module);
