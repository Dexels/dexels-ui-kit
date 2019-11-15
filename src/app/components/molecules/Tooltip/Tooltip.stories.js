import Button from '../Button/Button';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Tooltip from './Tooltip';

export default { title: 'molecules/Tooltip' };

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
                data-tooltip-position="top"
                onClick={() => {}}
            >
                {'This tooltip should render on the top'}
            </Button>
        </div>
        <div
            style={{
                float: 'right',
                position: 'absolute',
                right: '-80px',
                top: '10px',
            }}
        >
            <Button
                data-tooltip-component="Check out this tooltip!"
                data-tooltip-position="left"
                onClick={() => {}}
                size={Button.sizes.SMALL}
            >
                {'This tooltip should render on the left'}
            </Button>
        </div>
        <Button
            data-tooltip-component="Check out this tooltip!"
            data-tooltip-position="right"
            onClick={() => {}}
            size={Button.sizes.SMALL}
        >
            {'This tooltip should render on the right'}
        </Button>
        <Tooltip
            elevation={Tooltip.defaultProps.elevation}
            position={'bottom'}
            transitionDuration={Tooltip.defaultProps.transitionDuration}
            transitionEasing={Tooltip.defaultProps.transitionEasing}
        />
    </>
);
