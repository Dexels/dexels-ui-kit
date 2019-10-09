import { number, select, text } from '@storybook/addon-knobs';
import React from 'react';
import Tooltip from './Tooltip';

export default { title: 'molecules/Tooltip' };

export const Configurable = () => (
    <Tooltip
        elevation={select('Elevation', Tooltip.elevations, Tooltip.defaultProps.elevation)}
        placement={select('Placement', Tooltip.placements, Tooltip.defaultProps.placement)}
        title={text('Title', 'Configure me!')}
        transitionDuration={number('Transition duration', Tooltip.defaultProps.transitionDuration)}
        transitionEasing={select('Transition type', Tooltip.transitionEasings, Tooltip.defaultProps.transitionEasing)}
    >
        <span style={{
            backgroundColor: 'yellow',
            borderRadius: '50px',
            padding: '12px',
        }}
        >
            {'Hover me'}
        </span>
    </Tooltip>
);

export const ConfigurableWithLongText = () => (
    <Tooltip
        elevation={select('Elevation', Tooltip.elevations, Tooltip.defaultProps.elevation)}
        placement={select('Placement', Tooltip.placements, Tooltip.defaultProps.placement)}
        title={text('Title', 'Configure me!')}
        transitionDuration={number('Transition duration', Tooltip.defaultProps.transitionDuration)}
        transitionEasing={select('Transition type', Tooltip.transitionEasings, Tooltip.defaultProps.transitionEasing)}
    >
        <span style={{
            backgroundColor: 'red',
            borderRadius: '50px',
            color: 'white',
            padding: '4px',
        }}
        >
            {'Hover me, but this time with some long text'}
        </span>
    </Tooltip>
);
