import React, { FunctionComponent } from 'react';
import FullscreenLoader from './FullscreenLoader';
import { FullscreenLoaderType } from './types';
import { select } from '@storybook/addon-knobs';

export default { title: 'molecules/FullscreenLoader' };

export const Configurable: FunctionComponent = () => (
    <FullscreenLoader type={select('Type', FullscreenLoaderType, FullscreenLoaderType.CIRCLES)} />
);
