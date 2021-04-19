import { boolean, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import ErrorMessage from './ErrorMessage';

export default { title: 'atoms/ErrorMessage' };

export const Configurable: FunctionComponent = () => (
    <ErrorMessage isOutlineVariant={boolean('Is outline type', true)}>
        {text('Error message', 'Everything is broken, help!')}
    </ErrorMessage>
);
