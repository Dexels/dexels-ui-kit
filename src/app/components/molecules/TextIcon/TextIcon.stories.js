import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import TextIcon from './TextIcon';

export default { title: 'molecules/TextIcon' };

export const Configurable = () => (
    <TextIcon
        size={select('Size', TextIcon.sizes, TextIcon.defaultProps.size)}
        text={text('Text', 'A')}
    />
);
