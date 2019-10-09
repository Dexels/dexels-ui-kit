import { boolean, number } from '@storybook/addon-knobs';
import Overlay from './Overlay';
import React from 'react';

export default { title: 'molecules/Overlay' };

export const Configurable = () => (
    <Overlay
        height={number('Set height in %', Overlay.defaultProps.height)}
        isFullscreen={boolean('Fullscreen', Overlay.defaultProps.isFullscreen)}
        isVisible={boolean('Is visible', Overlay.defaultProps.isVisible)}
        width={number('Set width in %', Overlay.defaultProps.width)}
    />
);
