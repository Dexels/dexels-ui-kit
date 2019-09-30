import ErrorMessage from './ErrorMessage';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default { title: 'atoms/ErrorMessage' };

export const Configurable = () => (
    <ErrorMessage>
        {text('Error message', 'Everything is broken, help!')}
    </ErrorMessage>
);
