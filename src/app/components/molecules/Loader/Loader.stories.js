import Loader from './Loader';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'molecules/Loader' };

export const Configurable = () => (
    <Loader type={select('Type', Loader.types, Loader.defaultProps.type)} />
);
