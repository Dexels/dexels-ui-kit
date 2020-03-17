import { boolean } from '@storybook/addon-knobs';
import Overlay from './Overlay';
import React from 'react';

export default { title: 'molecules/Overlay' };

export const Configurable = () => (
    <>
        <Overlay
            isVisible={boolean('Is visible', true)}
        />
        <p
            style={{
                color: 'black',
                margin: '40px auto',
                position: 'relative',
                zIndex: 2,
            }}
        >
            {'Such a sick overlay!'}
        </p>
    </>
);
