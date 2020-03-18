import FullscreenLoader from './FullscreenLoader';
import { FullscreenLoaderType } from './types';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'molecules/FullscreenLoader' };

export const Configurable = () => (
    <FullscreenLoader type={select('Type', FullscreenLoaderType, FullscreenLoaderType.CIRCLES)} />
);
