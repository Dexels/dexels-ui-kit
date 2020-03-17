import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import { Size } from '../../../types';
import TextIcon from './TextIcon';

export default { title: 'molecules/TextIcon' };

export const Configurable = () => (
    <TextIcon
        size={select('Size', Size, Size.LARGE)}
        text={text('Text', 'A')}
    />
);
