import { boolean, select, text } from '@storybook/addon-knobs';
import Input from './Input';
import React from 'react';

export default { title: 'molecules/Input' };

export const Configurable = () => (
    <Input
        label={text('Label', 'This is a label')}
        name="A random name"
    />
);
