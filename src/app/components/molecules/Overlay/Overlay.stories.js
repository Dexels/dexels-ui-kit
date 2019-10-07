import { boolean, text } from '@storybook/addon-knobs';
import Overlay from './Overlay';
import React from 'react';

export default { title: 'molecules/Overlay' };

export const Configurable = () => (
    <Overlay
        height={text('Set height in px or %', Overlay.defaultProps.height)}
        isFullscreen={boolean('Fullscreen', Overlay.defaultProps.isFullscreen)}
        isVisible={boolean('Is visible', Overlay.defaultProps.isVisible)}
        width={text('Set width in px or %', Overlay.defaultProps.width)}
    />
);
