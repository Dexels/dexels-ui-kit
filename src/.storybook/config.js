import '../app/styles/fonts/fonts.css';
import { addDecorator, configure } from '@storybook/react';
import BaseStyles from '../app/styles/base';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

// Make knobs addon available in all stories
addDecorator(withKnobs);

// Wrap all stories in the ThemeProvider and render the BaseStyling
addDecorator((storyFn) => (
    <>
        <BaseStyles />
        {storyFn()}
    </>
));

// Import all stories
configure(require.context('../app', true, /\.stories\.js$/), module);
