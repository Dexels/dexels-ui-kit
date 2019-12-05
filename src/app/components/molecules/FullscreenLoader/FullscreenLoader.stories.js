import FullscreenLoader from './FullscreenLoader';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'molecules/FullscreenLoader' };

export const Configurable = () => (
    <FullscreenLoader type={select('Type', FullscreenLoader.types, FullscreenLoader.defaultProps.type)} />
);
