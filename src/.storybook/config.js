import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';
import '../app/styles/global.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { addDecorator, configure } from '@storybook/react';
import moment from 'moment';
import React from 'react';
import { themeBasic } from '../app/styles/theming/themes/basic';
import { themeDark } from '../app/styles/theming/themes/dark';
// This seems like a ESLint bug
// eslint-disable-next-line import/no-unresolved
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import Wrapper from './components/Wrapper/Wrapper';

// Set Moment locale to Dutch
moment.locale('nl');

// Make info and knobs addons available in all stories
addDecorator(withInfo);
addDecorator(withKnobs);

// Wrap all stories in some centered div and then inside a Card so you can see the them color
addDecorator((storyFn) => (
    <Wrapper>
        {storyFn()}
    </Wrapper>
));

// Add withThemesProvider setup to make themes available in all stories
addDecorator(withThemesProvider([
    {
        ...themeBasic,
        name: 'Basic',
    },
    {
        ...themeDark,
        name: 'Dark',
    },
]));

// Import all stories
configure(require.context('../app', true, /\.stories\.js$/), module);
