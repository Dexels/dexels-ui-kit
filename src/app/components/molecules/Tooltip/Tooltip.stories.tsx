import {
    ButtonSize,
    Easing,
    Elevation,
    Placement,
} from '../../../types';
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
                data-tooltip-position={Placement.TOP}
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
                data-tooltip-position={Placement.LEFT}
                onClick={action('On button click left')}
                size={ButtonSize.SMALL}
            >
                {'This tooltip should render on the left'}
            </Button>
        </div>
        <Button
            data-tooltip-component="Check out this tooltip!"
            data-tooltip-position={Placement.RIGHT}
            onClick={action('On button click right')}
            size={ButtonSize.SMALL}
        >
            {'This tooltip should render on the right'}
        </Button>
        <Tooltip
            delay={number('Delay', Tooltip.defaultProps.delay)}
            elevation={select('Elevation', Elevation, Tooltip.defaultProps.elevation)}
            position={select('Position', Placement, Tooltip.defaultProps.position)}
            transitionDuration={number('Transition duration', Tooltip.defaultProps.transitionDuration)}
            transitionEasing={select(
                'Transition type',
                Easing,
                Tooltip.defaultProps.transitionEasing,
            )}
        />
    </>
);
