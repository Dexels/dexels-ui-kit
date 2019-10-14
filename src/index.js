import './app/styles/fonts/exo2/exo2.css';
import './app/styles/fonts/iconfont/iconfont.css';
import './app/styles/fonts/opensans/opensans.css';
import App from './app/App';
import { MyThemeProvider } from './app/styles/theme/ThemeContext';
import React from 'react';
import { render } from 'react-dom';

const theme = {
    layout: 'basic',
    mode: 'basic',
};

// Generate root element and add it to the page
const root = document.createElement('div');
document.body.appendChild(root);

// Render the application 💯
render(
    <MyThemeProvider theme={theme}>
        <App />
    </MyThemeProvider>,
    root,
);
