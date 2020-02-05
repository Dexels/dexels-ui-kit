import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';
import Skeleton from './Skeleton';

export default { title: 'molecules/Skeleton' };

export const Configurable = () => (
    <Skeleton
        circle={boolean('Is circle', Skeleton.defaultProps.circle)}
        count={number('How many items', Skeleton.defaultProps.count)}
        duration={number('Duration', Skeleton.defaultProps.duration)}
        height={text('Height', Skeleton.defaultProps.height ? Skeleton.defaultProps.height.toString() : '')}
        width={text('Width', Skeleton.defaultProps.width ? Skeleton.defaultProps.width.toString() : '')}
    />
);
