import './app/styles/fonts/fonts.css';
import App from './app/App';
import React from 'react';
import { render } from 'react-dom';

// Generate root element and add it to the page
const root = document.createElement('div');
document.body.appendChild(root);

// Render the application 💯
render(<App />, root);
