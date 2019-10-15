import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';
import { addDecorator, configure } from '@storybook/react';
import React from 'react';
// This seems like a ESLint bug
// eslint-disable-next-line import/no-unresolved
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// Make info and knobs addons available in all stories
addDecorator(withInfo);
addDecorator(withKnobs);

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

// Import all stories
configure(require.context('../app', true, /\.stories\.js$/), module);
