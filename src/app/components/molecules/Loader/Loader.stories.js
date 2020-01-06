import { boolean, select } from '@storybook/addon-knobs';
import Loader from './Loader';
import { LOADER_SIZES } from './Loader.consts';
import React from 'react';

export default { title: 'molecules/Loader' };

export const Configurable = () => (
    <Loader
        isInverted={boolean('Is inverted', Loader.defaultProps.isInverted)}
        size={select('Size', Loader.sizes, LOADER_SIZES.LARGE)}
    />
);
