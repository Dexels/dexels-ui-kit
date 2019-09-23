import '../app/styles/fonts/fonts.css';
import { addDecorator, configure } from '@storybook/react';
import BaseStyles from '../app/styles/base';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

// Make knobs addon available in all stories
addDecorator(withKnobs);

// Wrap all stories in the ThemeProvider and render the BaseStyling
addDecorator((storyFn) => (
    <div style={{
        margin: '40px auto',
        width: '80%',
    }}
    >
        <BaseStyles />
        {storyFn()}
    </div>
));

// Import all stories
configure(require.context('../app', true, /\.stories\.js$/), module);
