import Button from '../Button/Button';
import Chip from '../Chip/Chip';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextIcon from '../TextIcon/TextIcon';
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
            data-tooltip-component="Check out this tooltip!"
            data-tooltip-position="bottom"
            style={{
                background: 'grey',
                height: '400px',
                left: '100px',
                position: 'absolute',
                top: '0',
                width: '200px',
            }}
        >
            {'This is a big div'}
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
                onClick={() => {}}
            >
                {'Click 1'}
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
                data-tooltip-delay
                onClick={() => {}}
                size={Button.sizes.SMALL}
            >
                {'Click 2'}
            </Button>
        </div>
        <Button
            data-tooltip-component="Check out this tooltip!"
            data-tooltip-position="right"
            onClick={() => {}}
            size={Button.sizes.SMALL}
        >
            {'Click me!'}
        </Button>
        <div
            style={{
                position: 'absolute',
                right: '190px',
                top: '100px',
            }}
        >
            <TextIcon data-tooltip-component="tooltip 3" data-tooltip-position="left" text="A" />
        </div>
        <div
            style={{
                left: '150px',
                position: 'absolute',
                top: '300px',
            }}
        >
            <Chip data-tooltip-component="Tooltip 4" onClick={() => {}}>
                {'Click 4'}
            </Chip>
        </div>
        <Tooltip
            elevation={Tooltip.defaultProps.elevation}
            transitionDuration={Tooltip.defaultProps.transitionDuration}
            transitionEasing={Tooltip.defaultProps.transitionEasing}
        />
    </>
);
