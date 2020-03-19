import React, { FunctionComponent } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { Size } from '../../../types';
import TextIcon from './TextIcon';

export default { title: 'molecules/TextIcon' };

export const Configurable: FunctionComponent = () => (
    <TextIcon
        size={select('Size', Size, Size.LARGE)}
        text={text('Text', 'A')}
    />
);
