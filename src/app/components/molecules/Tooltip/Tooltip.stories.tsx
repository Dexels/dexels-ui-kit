import { ButtonSize, Easing, Elevation, Placement } from '../../../types';
import { number, select } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import notes from './notes.md';
import { renderToString } from 'react-dom/server';
import Tooltip from './Tooltip';

export default {
    parameters: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        notes,
    },
    title: 'molecules/Tooltip',
};

const CustomTestComponent: FunctionComponent = () => (
    <span>
        {'CLICK TO REDIRECT TO '}
        <a href="https://www.google.nl" rel="noopener noreferrer" target="_blank">
            {'GOOGLE'}
        </a>
    </span>
);

export const Configurable: FunctionComponent = () => (
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
            data-tooltip-component=""
            style={{
                background: 'yellow',
                height: '50px',
                left: '550px',
                position: 'absolute',
                top: '0',
                width: '100px',
            }}
        >
            {'This tooltip should NOT render at all'}
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
            delay={number('Delay', 4000)}
            elevation={select('Elevation', Elevation, Elevation.LEVEL_6)}
            position={select('Position', Placement, Placement.BOTTOM)}
            transitionDuration={number('Transition duration', 300)}
            transitionEasing={select('Transition type', Easing, Easing.EASE)}
        />
    </>
);
