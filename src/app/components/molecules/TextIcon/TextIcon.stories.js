import React from 'react';
import { text } from '@storybook/addon-knobs';
import TextIcon from './TextIcon';

export default { title: 'molecules/TextIcon' };

export const Configurable = () => (
    <TextIcon text={text('Text', 'A')} />
);
