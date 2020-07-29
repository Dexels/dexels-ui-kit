import React, { FunctionComponent } from 'react';
import { boolean } from '@storybook/addon-knobs';
import { ProgressBar } from './ProgressBar';

export default { title: 'molecules/ProgressBar' };

export const Configurable: FunctionComponent = () => (
    <ProgressBar isIndeterminate={boolean('Is indeterminate', true)} />
);
