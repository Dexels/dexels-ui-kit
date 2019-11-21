import { boolean, number } from '@storybook/addon-knobs';
import Overlay from './Overlay';
import React from 'react';

export default { title: 'molecules/Overlay' };

export const Configurable = () => (
    <>
        <Overlay
            height={number('Height in %', Overlay.defaultProps.height)}
            isFullscreen={boolean('Fullscreen', Overlay.defaultProps.isFullscreen)}
            isVisible={boolean('Is visible', Overlay.defaultProps.isVisible)}
            width={number('Width in %', Overlay.defaultProps.width)}
        />
        <p
            style={{
                color: 'black',
                margin: '40px auto',
            }}
        >
            {'Such a sick overlay!'}
        </p>
    </>
);
