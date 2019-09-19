import '../app/styles/fonts/fonts.css';
import { addDecorator, configure } from '@storybook/react';
import BaseStyles from '../app/styles/base';
import React from 'react';
import theme from '../app/styles/theme/theme';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

// Make knobs addon available in all stories
addDecorator(withKnobs);

// Wrap all stories in the ThemeProvider and render the BaseStyling
addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>
        <>
            <BaseStyles />
            {storyFn()}
        </>
    </ThemeProvider>
));

// Import all stories
configure(require.context('../app', true, /\.stories\.js$/), module);
