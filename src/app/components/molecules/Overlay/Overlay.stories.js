import { boolean, text } from '@storybook/addon-knobs';
import Overlay from './Overlay';
import React from 'react';

export default { title: 'molecules/Overlay' };

export const Configurable = () => (
    <Overlay
        fullScreen={boolean('Fullscreen', Overlay.defaultProps.fullScreen)}
        height={text('Set height in px or %', Overlay.defaultProps.height)}
        isVisible={boolean('Is visible', Overlay.defaultProps.isVisible)}
        width={text('Set width in px or %', Overlay.defaultProps.width)}
    />
);
