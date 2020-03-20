import React, { FunctionComponent } from 'react';
import ErrorMessage from './ErrorMessage';
import { text } from '@storybook/addon-knobs';

export default { title: 'atoms/ErrorMessage' };

export const Configurable: FunctionComponent = () => (
    <ErrorMessage>
        {text('Error message', 'Everything is broken, help!')}
    </ErrorMessage>
);
