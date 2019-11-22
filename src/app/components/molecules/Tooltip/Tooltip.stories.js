import { number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import notes from './notes.md';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Tooltip from './Tooltip';

export default {
    parameters: {
        notes,
    },
    title: 'molecules/Tooltip',
};

const CustomTestComponent = () => (
    <span>
        {'CLICK TO REDIRECT TO '}
        <a href="https://www.google.nl" rel="noopener noreferrer" target="_blank">
            {'GOOGLE'}
        </a>
    </span>
);

export const Configurable = () => (
    <>
        <div
            data-tooltip-component="Hi!"
            style={{
                background: 'grey',
                height: '400px',
                left: '300px',
                position: 'absolute',
                top: '0',
                width: '200px',
            }}
        >
            {'This tooltip should render on the bottom'}
        </div>
        <div
            style={{
                left: '-60px',
                position: 'absolute',
                top: '100px',
            }}
        >
            <Button
                data-tooltip-component={renderToString(<CustomTestComponent />)}
                data-tooltip-delay
                data-tooltip-position={Tooltip.positions.TOP}
                onClick={action('On button click top')}
            >
                {'This tooltip should render on the top'}
            </Button>
        </div>
        <div
            style={{
                left: '900px',
                position: 'absolute',
                top: '10px',
            }}
        >
            <Button
                data-tooltip-component="Check out this tooltip!"
                data-tooltip-position={Tooltip.positions.LEFT}
                onClick={action('On button click left')}
                size={Button.sizes.SMALL}
            >
                {'This tooltip should render on the left'}
            </Button>
        </div>
        <Button
            data-tooltip-component="Check out this tooltip!"
            data-tooltip-position={Tooltip.positions.RIGHT}
            onClick={action('On button click right')}
            size={Button.sizes.SMALL}
        >
            {'This tooltip should render on the right'}
        </Button>
        <Tooltip
            elevation={select('Elevation', Tooltip.elevations, Tooltip.defaultProps.elevation)}
            position={select('Position', Tooltip.positions, Tooltip.defaultProps.position)}
            transitionDuration={number('Transition duration', Tooltip.defaultProps.transitionDuration)}
            transitionEasing={select(
                'Transition type',
                Tooltip.transitionEasings,
                Tooltip.defaultProps.transitionEasing,
            )}
        />
    </>
);
