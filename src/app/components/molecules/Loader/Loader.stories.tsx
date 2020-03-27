import { boolean, select } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import Loader from './Loader';
import { Size } from '../../../types';

export default { title: 'molecules/Loader' };

export const Configurable: FunctionComponent = () => (
    <Loader isInverted={boolean('Is inverted', false)} size={select('Size', Size, Size.LARGE)} />
);
