import { boolean, select } from '@storybook/addon-knobs';
import Loader from './Loader';
import React from 'react';
import { Size } from '../../../types';

export default { title: 'molecules/Loader' };

export const Configurable = () => (
    <Loader
        isInverted={boolean('Is inverted', false)}
        size={select('Size', Size, Size.LARGE)}
    />
);
